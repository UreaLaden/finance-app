package activeServers

import (
	"context"
	"log"

	transactions "github.com/urealaden/cova-cents/server/proto/transactions"
	common "github.com/urealaden/cova-cents/server/proto/common"	
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

func (s *BudgetServer) AddTransaction(ctx context.Context, req *transactions.AddTransactionRequest) (*transactions.AddTransactionResponse, error) {
	if err := validateTransaction(req.Transaction); err != nil {
		return nil, err
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("transactions")

	req.Transaction.Id = ""

	dbRef, err := ref.Push(ctx, req.Transaction)
	if err != nil || dbRef == nil {
		return nil, status.Errorf(codes.Internal, "error adding transaction: %v", err)
	}

	req.Transaction.Id = dbRef.Key

	response := &transactions.AddTransactionResponse{
		Transaction: req.Transaction,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Transaction added successfully",
		}}

	return response, nil
}

func (s *BudgetServer) RetrieveTransactions(ctx context.Context, req *transactions.RetrieveTransactionsRequest) (*transactions.RetrieveTransactionsResponse, error) {
	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("transactions")
	var transactionsMap map[string]*transactions.Transaction
	if err := ref.Get(ctx, &transactionsMap); err != nil {
		log.Printf("Error retrieving transactions: %v", err)
		return nil, status.Errorf(codes.Internal, "error getting transactions: %v", err)
	}

	transactionsResponse := make([]*transactions.Transaction, 0, len(transactionsMap))
	for key, t := range transactionsMap {
		updatedTransaction := t
		updatedTransaction.Id = key

		transactionsResponse = append(transactionsResponse, updatedTransaction)
	}
		
	response := &transactions.RetrieveTransactionsResponse{
		Transactions:transactionsResponse,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Transactions retrieved successfully",
		},
	}

	return response, nil
}

func validateTransaction(t *transactions.Transaction) error {
	if t == nil {
		return status.Errorf(codes.InvalidArgument, "Transaction is required")
	}
	
	if t.Name == "" {
		return status.Errorf(codes.InvalidArgument, "Name is required")
	}

	if t.Category == "" {
		return status.Errorf(codes.InvalidArgument, "Category is required")
	}

	if t.Date == nil {
		return status.Errorf(codes.InvalidArgument, "Date is required")
	}


	return nil
}