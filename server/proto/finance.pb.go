// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.0
// 	protoc        v5.29.0--rc2
// source: finance.proto

package proto

import (
	budget "github.com/urealaden/cova-cents/server/proto/budget"
	pots "github.com/urealaden/cova-cents/server/proto/pots"
	transactions "github.com/urealaden/cova-cents/server/proto/transactions"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_finance_proto protoreflect.FileDescriptor

var file_finance_proto_rawDesc = []byte{
	0x0a, 0x0d, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x07, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x1a, 0x0c, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x12, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0a, 0x70, 0x6f, 0x74, 0x73,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xfc, 0x05, 0x0a, 0x0d, 0x42, 0x75, 0x64, 0x67, 0x65,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x42, 0x0a, 0x09, 0x41, 0x64, 0x64, 0x42,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x12, 0x19, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x41, 0x64, 0x64, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1a, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x64, 0x42, 0x75,
	0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x45, 0x0a, 0x0a,
	0x47, 0x65, 0x74, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x12, 0x1a, 0x2e, 0x66, 0x69, 0x6e,
	0x61, 0x6e, 0x63, 0x65, 0x2e, 0x47, 0x65, 0x74, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65,
	0x2e, 0x47, 0x65, 0x74, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x12, 0x4b, 0x0a, 0x0c, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x75, 0x64,
	0x67, 0x65, 0x74, 0x12, 0x1c, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x1d, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x4b, 0x0a, 0x0c, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74,
	0x12, 0x1c, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d,
	0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x42,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x51, 0x0a,
	0x0e, 0x41, 0x64, 0x64, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12,
	0x1e, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x64, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1f, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x64, 0x54, 0x72, 0x61,
	0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x63, 0x0a, 0x14, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x54, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x24, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e,
	0x63, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x54, 0x72, 0x61, 0x6e, 0x73,
	0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25,
	0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76,
	0x65, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x39, 0x0a, 0x06, 0x41, 0x64, 0x64, 0x50, 0x6f, 0x74, 0x12,
	0x16, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x41, 0x64, 0x64, 0x50, 0x6f, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63,
	0x65, 0x2e, 0x41, 0x64, 0x64, 0x50, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x4b, 0x0a, 0x0c, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76, 0x65, 0x50, 0x6f, 0x74, 0x73,
	0x12, 0x1c, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69,
	0x65, 0x76, 0x65, 0x50, 0x6f, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d,
	0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x52, 0x65, 0x74, 0x72, 0x69, 0x65, 0x76,
	0x65, 0x50, 0x6f, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x42, 0x0a,
	0x09, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6f, 0x74, 0x12, 0x19, 0x2e, 0x66, 0x69, 0x6e,
	0x61, 0x6e, 0x63, 0x65, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6f, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x6f, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x42, 0x0a, 0x09, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x6f, 0x74, 0x12, 0x19,
	0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50,
	0x6f, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x66, 0x69, 0x6e, 0x61,
	0x6e, 0x63, 0x65, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x50, 0x6f, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x2e, 0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x72, 0x65, 0x61, 0x6c, 0x61, 0x64, 0x65, 0x6e, 0x2f, 0x63, 0x6f,
	0x76, 0x61, 0x2d, 0x63, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x2f,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_finance_proto_goTypes = []any{
	(*budget.AddBudgetRequest)(nil),                   // 0: finance.AddBudgetRequest
	(*budget.GetBudgetsRequest)(nil),                  // 1: finance.GetBudgetsRequest
	(*budget.UpdateBudgetRequest)(nil),                // 2: finance.UpdateBudgetRequest
	(*budget.DeleteBudgetRequest)(nil),                // 3: finance.DeleteBudgetRequest
	(*transactions.AddTransactionRequest)(nil),        // 4: finance.AddTransactionRequest
	(*transactions.RetrieveTransactionsRequest)(nil),  // 5: finance.RetrieveTransactionsRequest
	(*pots.AddPotRequest)(nil),                        // 6: finance.AddPotRequest
	(*pots.RetrievePotsRequest)(nil),                  // 7: finance.RetrievePotsRequest
	(*pots.UpdatePotRequest)(nil),                     // 8: finance.UpdatePotRequest
	(*pots.DeletePotRequest)(nil),                     // 9: finance.DeletePotRequest
	(*budget.AddBudgetResponse)(nil),                  // 10: finance.AddBudgetResponse
	(*budget.GetBudgetsResponse)(nil),                 // 11: finance.GetBudgetsResponse
	(*budget.UpdateBudgetResponse)(nil),               // 12: finance.UpdateBudgetResponse
	(*budget.DeleteBudgetResponse)(nil),               // 13: finance.DeleteBudgetResponse
	(*transactions.AddTransactionResponse)(nil),       // 14: finance.AddTransactionResponse
	(*transactions.RetrieveTransactionsResponse)(nil), // 15: finance.RetrieveTransactionsResponse
	(*pots.AddPotResponse)(nil),                       // 16: finance.AddPotResponse
	(*pots.RetrievePotsResponse)(nil),                 // 17: finance.RetrievePotsResponse
	(*pots.UpdatePotResponse)(nil),                    // 18: finance.UpdatePotResponse
	(*pots.DeletePotResponse)(nil),                    // 19: finance.DeletePotResponse
}
var file_finance_proto_depIdxs = []int32{
	0,  // 0: finance.BudgetService.AddBudget:input_type -> finance.AddBudgetRequest
	1,  // 1: finance.BudgetService.GetBudgets:input_type -> finance.GetBudgetsRequest
	2,  // 2: finance.BudgetService.UpdateBudget:input_type -> finance.UpdateBudgetRequest
	3,  // 3: finance.BudgetService.DeleteBudget:input_type -> finance.DeleteBudgetRequest
	4,  // 4: finance.BudgetService.AddTransaction:input_type -> finance.AddTransactionRequest
	5,  // 5: finance.BudgetService.RetrieveTransactions:input_type -> finance.RetrieveTransactionsRequest
	6,  // 6: finance.BudgetService.AddPot:input_type -> finance.AddPotRequest
	7,  // 7: finance.BudgetService.RetrievePots:input_type -> finance.RetrievePotsRequest
	8,  // 8: finance.BudgetService.UpdatePot:input_type -> finance.UpdatePotRequest
	9,  // 9: finance.BudgetService.DeletePot:input_type -> finance.DeletePotRequest
	10, // 10: finance.BudgetService.AddBudget:output_type -> finance.AddBudgetResponse
	11, // 11: finance.BudgetService.GetBudgets:output_type -> finance.GetBudgetsResponse
	12, // 12: finance.BudgetService.UpdateBudget:output_type -> finance.UpdateBudgetResponse
	13, // 13: finance.BudgetService.DeleteBudget:output_type -> finance.DeleteBudgetResponse
	14, // 14: finance.BudgetService.AddTransaction:output_type -> finance.AddTransactionResponse
	15, // 15: finance.BudgetService.RetrieveTransactions:output_type -> finance.RetrieveTransactionsResponse
	16, // 16: finance.BudgetService.AddPot:output_type -> finance.AddPotResponse
	17, // 17: finance.BudgetService.RetrievePots:output_type -> finance.RetrievePotsResponse
	18, // 18: finance.BudgetService.UpdatePot:output_type -> finance.UpdatePotResponse
	19, // 19: finance.BudgetService.DeletePot:output_type -> finance.DeletePotResponse
	10, // [10:20] is the sub-list for method output_type
	0,  // [0:10] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_finance_proto_init() }
func file_finance_proto_init() {
	if File_finance_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_finance_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_finance_proto_goTypes,
		DependencyIndexes: file_finance_proto_depIdxs,
	}.Build()
	File_finance_proto = out.File
	file_finance_proto_rawDesc = nil
	file_finance_proto_goTypes = nil
	file_finance_proto_depIdxs = nil
}
