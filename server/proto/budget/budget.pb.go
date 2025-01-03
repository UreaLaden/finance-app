// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.0
// 	protoc        v5.29.0--rc2
// source: budget.proto

package budget

import (
	common "github.com/urealaden/cova-cents/server/proto/common"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type Budget struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Category      string                 `protobuf:"bytes,2,opt,name=category,proto3" json:"category,omitempty"`
	Maximum       float64                `protobuf:"fixed64,3,opt,name=maximum,proto3" json:"maximum,omitempty"`
	Theme         string                 `protobuf:"bytes,4,opt,name=theme,proto3" json:"theme,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *Budget) Reset() {
	*x = Budget{}
	mi := &file_budget_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Budget) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Budget) ProtoMessage() {}

func (x *Budget) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Budget.ProtoReflect.Descriptor instead.
func (*Budget) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{0}
}

func (x *Budget) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Budget) GetCategory() string {
	if x != nil {
		return x.Category
	}
	return ""
}

func (x *Budget) GetMaximum() float64 {
	if x != nil {
		return x.Maximum
	}
	return 0
}

func (x *Budget) GetTheme() string {
	if x != nil {
		return x.Theme
	}
	return ""
}

type AddBudgetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Budget        *Budget                `protobuf:"bytes,1,opt,name=budget,proto3" json:"budget,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *AddBudgetRequest) Reset() {
	*x = AddBudgetRequest{}
	mi := &file_budget_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AddBudgetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddBudgetRequest) ProtoMessage() {}

func (x *AddBudgetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddBudgetRequest.ProtoReflect.Descriptor instead.
func (*AddBudgetRequest) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{1}
}

func (x *AddBudgetRequest) GetBudget() *Budget {
	if x != nil {
		return x.Budget
	}
	return nil
}

type AddBudgetResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Budget        *Budget                `protobuf:"bytes,1,opt,name=budget,proto3" json:"budget,omitempty"`
	Status        *common.Status         `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *AddBudgetResponse) Reset() {
	*x = AddBudgetResponse{}
	mi := &file_budget_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *AddBudgetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddBudgetResponse) ProtoMessage() {}

func (x *AddBudgetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddBudgetResponse.ProtoReflect.Descriptor instead.
func (*AddBudgetResponse) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{2}
}

func (x *AddBudgetResponse) GetBudget() *Budget {
	if x != nil {
		return x.Budget
	}
	return nil
}

func (x *AddBudgetResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type GetBudgetsRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Filter        string                 `protobuf:"bytes,1,opt,name=filter,proto3" json:"filter,omitempty"`  // Optional filter by category
	Limit         int32                  `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`   // Maximum number of results
	Offset        int32                  `protobuf:"varint,3,opt,name=offset,proto3" json:"offset,omitempty"` // Offset for pagination
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetBudgetsRequest) Reset() {
	*x = GetBudgetsRequest{}
	mi := &file_budget_proto_msgTypes[3]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetBudgetsRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBudgetsRequest) ProtoMessage() {}

func (x *GetBudgetsRequest) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[3]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBudgetsRequest.ProtoReflect.Descriptor instead.
func (*GetBudgetsRequest) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{3}
}

func (x *GetBudgetsRequest) GetFilter() string {
	if x != nil {
		return x.Filter
	}
	return ""
}

func (x *GetBudgetsRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *GetBudgetsRequest) GetOffset() int32 {
	if x != nil {
		return x.Offset
	}
	return 0
}

type GetBudgetsResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Budgets       []*Budget              `protobuf:"bytes,1,rep,name=budgets,proto3" json:"budgets,omitempty"`
	Status        *common.Status         `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetBudgetsResponse) Reset() {
	*x = GetBudgetsResponse{}
	mi := &file_budget_proto_msgTypes[4]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetBudgetsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetBudgetsResponse) ProtoMessage() {}

func (x *GetBudgetsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[4]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetBudgetsResponse.ProtoReflect.Descriptor instead.
func (*GetBudgetsResponse) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{4}
}

func (x *GetBudgetsResponse) GetBudgets() []*Budget {
	if x != nil {
		return x.Budgets
	}
	return nil
}

func (x *GetBudgetsResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type UpdateBudgetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Budget        *Budget                `protobuf:"bytes,1,opt,name=budget,proto3" json:"budget,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateBudgetRequest) Reset() {
	*x = UpdateBudgetRequest{}
	mi := &file_budget_proto_msgTypes[5]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateBudgetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateBudgetRequest) ProtoMessage() {}

func (x *UpdateBudgetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[5]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateBudgetRequest.ProtoReflect.Descriptor instead.
func (*UpdateBudgetRequest) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{5}
}

func (x *UpdateBudgetRequest) GetBudget() *Budget {
	if x != nil {
		return x.Budget
	}
	return nil
}

type UpdateBudgetResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Budget        *Budget                `protobuf:"bytes,1,opt,name=budget,proto3" json:"budget,omitempty"`
	Status        *common.Status         `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UpdateBudgetResponse) Reset() {
	*x = UpdateBudgetResponse{}
	mi := &file_budget_proto_msgTypes[6]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UpdateBudgetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateBudgetResponse) ProtoMessage() {}

func (x *UpdateBudgetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[6]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateBudgetResponse.ProtoReflect.Descriptor instead.
func (*UpdateBudgetResponse) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{6}
}

func (x *UpdateBudgetResponse) GetBudget() *Budget {
	if x != nil {
		return x.Budget
	}
	return nil
}

func (x *UpdateBudgetResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

type DeleteBudgetRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DeleteBudgetRequest) Reset() {
	*x = DeleteBudgetRequest{}
	mi := &file_budget_proto_msgTypes[7]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteBudgetRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteBudgetRequest) ProtoMessage() {}

func (x *DeleteBudgetRequest) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[7]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteBudgetRequest.ProtoReflect.Descriptor instead.
func (*DeleteBudgetRequest) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{7}
}

func (x *DeleteBudgetRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type DeleteBudgetResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Status        *common.Status         `protobuf:"bytes,2,opt,name=status,proto3" json:"status,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DeleteBudgetResponse) Reset() {
	*x = DeleteBudgetResponse{}
	mi := &file_budget_proto_msgTypes[8]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteBudgetResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteBudgetResponse) ProtoMessage() {}

func (x *DeleteBudgetResponse) ProtoReflect() protoreflect.Message {
	mi := &file_budget_proto_msgTypes[8]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteBudgetResponse.ProtoReflect.Descriptor instead.
func (*DeleteBudgetResponse) Descriptor() ([]byte, []int) {
	return file_budget_proto_rawDescGZIP(), []int{8}
}

func (x *DeleteBudgetResponse) GetStatus() *common.Status {
	if x != nil {
		return x.Status
	}
	return nil
}

var File_budget_proto protoreflect.FileDescriptor

var file_budget_proto_rawDesc = []byte{
	0x0a, 0x0c, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07,
	0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x1a, 0x0c, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x64, 0x0a, 0x06, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x12,
	0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12,
	0x1a, 0x0a, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x63, 0x61, 0x74, 0x65, 0x67, 0x6f, 0x72, 0x79, 0x12, 0x18, 0x0a, 0x07, 0x6d,
	0x61, 0x78, 0x69, 0x6d, 0x75, 0x6d, 0x18, 0x03, 0x20, 0x01, 0x28, 0x01, 0x52, 0x07, 0x6d, 0x61,
	0x78, 0x69, 0x6d, 0x75, 0x6d, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x68, 0x65, 0x6d, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x68, 0x65, 0x6d, 0x65, 0x22, 0x3b, 0x0a, 0x10, 0x41,
	0x64, 0x64, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12,
	0x27, 0x0a, 0x06, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x0f, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74,
	0x52, 0x06, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x22, 0x65, 0x0a, 0x11, 0x41, 0x64, 0x64, 0x42,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x27, 0x0a,
	0x06, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e,
	0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x06,
	0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x12, 0x27, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65,
	0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22,
	0x59, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x66, 0x69, 0x6c, 0x74, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05,
	0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d,
	0x69, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x06, 0x6f, 0x66, 0x66, 0x73, 0x65, 0x74, 0x22, 0x68, 0x0a, 0x12, 0x47, 0x65,
	0x74, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x29, 0x0a, 0x07, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x42, 0x75, 0x64, 0x67,
	0x65, 0x74, 0x52, 0x07, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x73, 0x12, 0x27, 0x0a, 0x06, 0x73,
	0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x69,
	0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x22, 0x3e, 0x0a, 0x13, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x75,
	0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x27, 0x0a, 0x06, 0x62,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x69,
	0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x06, 0x62, 0x75,
	0x64, 0x67, 0x65, 0x74, 0x22, 0x68, 0x0a, 0x14, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x42, 0x75,
	0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x27, 0x0a, 0x06,
	0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66,
	0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x06, 0x62,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x12, 0x27, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e,
	0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x22, 0x25,
	0x0a, 0x13, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x42, 0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x3f, 0x0a, 0x14, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x42,
	0x75, 0x64, 0x67, 0x65, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x27, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0f, 0x2e,
	0x66, 0x69, 0x6e, 0x61, 0x6e, 0x63, 0x65, 0x2e, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x42, 0x35, 0x5a, 0x33, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x72, 0x65, 0x61, 0x6c, 0x61, 0x64, 0x65, 0x6e, 0x2f, 0x63,
	0x6f, 0x76, 0x61, 0x2d, 0x63, 0x65, 0x6e, 0x74, 0x73, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x62, 0x75, 0x64, 0x67, 0x65, 0x74, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_budget_proto_rawDescOnce sync.Once
	file_budget_proto_rawDescData = file_budget_proto_rawDesc
)

func file_budget_proto_rawDescGZIP() []byte {
	file_budget_proto_rawDescOnce.Do(func() {
		file_budget_proto_rawDescData = protoimpl.X.CompressGZIP(file_budget_proto_rawDescData)
	})
	return file_budget_proto_rawDescData
}

var file_budget_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_budget_proto_goTypes = []any{
	(*Budget)(nil),               // 0: finance.Budget
	(*AddBudgetRequest)(nil),     // 1: finance.AddBudgetRequest
	(*AddBudgetResponse)(nil),    // 2: finance.AddBudgetResponse
	(*GetBudgetsRequest)(nil),    // 3: finance.GetBudgetsRequest
	(*GetBudgetsResponse)(nil),   // 4: finance.GetBudgetsResponse
	(*UpdateBudgetRequest)(nil),  // 5: finance.UpdateBudgetRequest
	(*UpdateBudgetResponse)(nil), // 6: finance.UpdateBudgetResponse
	(*DeleteBudgetRequest)(nil),  // 7: finance.DeleteBudgetRequest
	(*DeleteBudgetResponse)(nil), // 8: finance.DeleteBudgetResponse
	(*common.Status)(nil),        // 9: finance.Status
}
var file_budget_proto_depIdxs = []int32{
	0, // 0: finance.AddBudgetRequest.budget:type_name -> finance.Budget
	0, // 1: finance.AddBudgetResponse.budget:type_name -> finance.Budget
	9, // 2: finance.AddBudgetResponse.status:type_name -> finance.Status
	0, // 3: finance.GetBudgetsResponse.budgets:type_name -> finance.Budget
	9, // 4: finance.GetBudgetsResponse.status:type_name -> finance.Status
	0, // 5: finance.UpdateBudgetRequest.budget:type_name -> finance.Budget
	0, // 6: finance.UpdateBudgetResponse.budget:type_name -> finance.Budget
	9, // 7: finance.UpdateBudgetResponse.status:type_name -> finance.Status
	9, // 8: finance.DeleteBudgetResponse.status:type_name -> finance.Status
	9, // [9:9] is the sub-list for method output_type
	9, // [9:9] is the sub-list for method input_type
	9, // [9:9] is the sub-list for extension type_name
	9, // [9:9] is the sub-list for extension extendee
	0, // [0:9] is the sub-list for field type_name
}

func init() { file_budget_proto_init() }
func file_budget_proto_init() {
	if File_budget_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_budget_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_budget_proto_goTypes,
		DependencyIndexes: file_budget_proto_depIdxs,
		MessageInfos:      file_budget_proto_msgTypes,
	}.Build()
	File_budget_proto = out.File
	file_budget_proto_rawDesc = nil
	file_budget_proto_goTypes = nil
	file_budget_proto_depIdxs = nil
}
