PROTO_DIR=proto

ifeq ($(OS),Windows_NT)
	SHELL := bash 
	SHELL_VERSION = $(shell echo $$BASH_VERSION)
	OS = windows $$(uname -m)
	PACKAGE = $(shell head -n 1 go.mod | cut -d ' ' -f 2)
	CHECK_DIR_CMD = test -d server/proto/$@ || (echo "Directory server/proto/$@ does not exist" && false)

endif

## Every new project should be added here
#######################################
project := common budget finance transactions pots

all: $(project)
common: $@
budget: $@
finance: $@
transactions: $@
pots: $@

#######################################

$(project):	
	rm -rf server/proto/$@.pb.go
	protoc -I${PROTO_DIR} --go_opt=module=${PACKAGE} --go_out=. --go-grpc_opt=module=${PACKAGE} --go-grpc_out=. ${PROTO_DIR}/$@.proto

clear-proto:
	rm -rf server/proto/*.pb.go