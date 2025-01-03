package activeServers

import (
	"context"

	common "github.com/urealaden/cova-cents/server/proto/common"
	pots "github.com/urealaden/cova-cents/server/proto/pots"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

func (s *BudgetServer) AddPot(ctx context.Context, req *pots.AddPotRequest) (*pots.AddPotResponse, error) {
	if req.Pot == nil {
		return nil, status.Errorf(codes.InvalidArgument, "Pot is required")
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("pots")
	req.Pot.Id = ""

	dbRef, err := ref.Push(ctx, req.Pot)
	if err != nil || dbRef == nil {
		return nil, status.Errorf(codes.Internal, "error adding pot: %v", err)
	}

	req.Pot.Id = dbRef.Key

	response := &pots.AddPotResponse{
		Pot: req.Pot,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Pot added successfully",
		},
	}

	return response, nil
}

func (s *BudgetServer) RetrievePots(ctx context.Context, req *pots.RetrievePotsRequest) (*pots.RetrievePotsResponse, error) {
	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("pots")

	var potsMap map[string]*pots.Pot
	if err := ref.Get(ctx, &potsMap); err != nil {
		return nil, status.Errorf(codes.Internal, "error getting pots: %v", err)
	}

	potsResponse := make([]*pots.Pot, 0, len(potsMap))
	for key, p := range potsMap {
		updatedPot := p
		updatedPot.Id = key

		potsResponse = append(potsResponse, updatedPot)
	}

	response := &pots.RetrievePotsResponse{
		Pots: potsResponse,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Pots retrieved successfully",
		},
	}

	return response, nil
}

func (s *BudgetServer) UpdatePot(ctx context.Context, req *pots.UpdatePotRequest) (*pots.UpdatePotResponse, error) {
	if err := validatePot(req.Pot); err != nil {
		return nil, err
	}

	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("pots")

	if err := ref.Child(req.Pot.Id).Set(ctx, req.Pot); err != nil {
		return nil, status.Errorf(codes.Internal, "error updating pot: %v", err)
	}

	response := &pots.UpdatePotResponse{
		Pot: req.Pot,
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Pot updated successfully",
		},
	}

	return response, nil
}

func (s *BudgetServer) DeletePot(ctx context.Context, req *pots.DeletePotRequest) (*pots.DeletePotResponse, error) {
	if err := s.AppServer.ValidateDBClient(); err != nil {
		return nil, err
	}

	ref := s.AppServer.DBClient.NewRef("pots")
	if err := ref.Child(req.Id).Delete(ctx); err != nil {
		return nil, status.Errorf(codes.Internal, "error deleting pot: %v", err)
	}

	response := &pots.DeletePotResponse{
		Status: &common.Status{
			Code:    codes.OK.String(),
			Message: "Pot deleted successfully",
		},
	}

	return response, nil
}

func validatePot(p *pots.Pot) error {
	if p == nil {
		return status.Errorf(codes.InvalidArgument, "Pot is required")
	}

	if p.Id == "" {
		return status.Errorf(codes.InvalidArgument, "Pot ID is required")
	}

	if p.Name == "" {
		return status.Errorf(codes.InvalidArgument, "Name is required")
	}
	
	return nil
}
