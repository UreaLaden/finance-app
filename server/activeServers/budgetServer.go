package activeServers

import (
	"context"
	"log"

	budget "github.com/urealaden/cova-cents/server/proto/budget"
	common "github.com/urealaden/cova-cents/server/proto/common"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

func (s *BudgetServer) AddBudget(ctx context.Context, req *budget.AddBudgetRequest) (*budget.AddBudgetResponse, error) {

	if req.Budget == nil {
		return nil, status.Errorf(codes.InvalidArgument, "Budget is required")
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("budgets")

	req.Budget.Id = ""

	dbRef, err := ref.Push(ctx, req.Budget)
	if err != nil || dbRef == nil {
		return nil, status.Errorf(codes.Internal, "error adding budget: %v", err)
	}

	req.Budget.Id = dbRef.Key

	response := &budget.AddBudgetResponse{
		Budget: req.Budget,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Budget added successfully",
		},
	}

	return response, nil
}

func (s *BudgetServer) GetBudgets(ctx context.Context, req *budget.GetBudgetsRequest) (*budget.GetBudgetsResponse, error) {
	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("budgets")
	var budgetsMap map[string]*budget.Budget
	if err := ref.Get(ctx, &budgetsMap); err != nil {
		log.Printf("Error retrieving budgets: %v", err)
		return nil, status.Errorf(codes.Internal, "error getting budgets: %v", err)
	}
	
	budgets := make([]*budget.Budget, 0, len(budgetsMap))
	for key, b := range budgetsMap {
		updatedBudget := &budget.Budget{
			Id:       key,
			Category: b.Category,
			Theme:    b.Theme,
			Maximum:  b.Maximum,
		}

		budgets = append(budgets, updatedBudget)
	}

	response := &budget.GetBudgetsResponse{
		Budgets: budgets,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Budgets retrieved successfully",
		},
	}

	return response, nil
}
func (s *BudgetServer) UpdateBudget(ctx context.Context, req *budget.UpdateBudgetRequest) (*budget.UpdateBudgetResponse, error) {
	if req.Budget == nil {
		return nil, status.Errorf(codes.InvalidArgument, "Budget is required")
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("budgets")
	if err := ref.Child(req.Budget.Id).Set(ctx, req.Budget); err != nil {
		return nil, status.Errorf(codes.Internal, "error updating budget: %v", err)
	}

	response := &budget.UpdateBudgetResponse{
		Budget: req.Budget,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Budget updated successfully",
		},
	}

	return response, nil
}
func (s *BudgetServer) DeleteBudget(ctx context.Context, req *budget.DeleteBudgetRequest) (*budget.DeleteBudgetResponse, error) {
	log.Println("DeleteBudget invoked")
	if req.Id == "" {
		return nil, status.Errorf(codes.InvalidArgument, "Budget ID is required")
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("budgets")
	if err := ref.Child(req.Id).Delete(ctx); err != nil {
		return nil, status.Errorf(codes.Internal, "error deleting budget: %v", err)
	}

	response := &budget.DeleteBudgetResponse{
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Budget deleted successfully",
		},
	}

	return response, nil
}
