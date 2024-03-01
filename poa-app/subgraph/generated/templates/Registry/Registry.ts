// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ContractAdded extends ethereum.Event {
  get params(): ContractAdded__Params {
    return new ContractAdded__Params(this);
  }
}

export class ContractAdded__Params {
  _event: ContractAdded;

  constructor(event: ContractAdded) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get contractAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ContractUpgraded extends ethereum.Event {
  get params(): ContractUpgraded__Params {
    return new ContractUpgraded__Params(this);
  }
}

export class ContractUpgraded__Params {
  _event: ContractUpgraded;

  constructor(event: ContractUpgraded) {
    this._event = event;
  }

  get name(): string {
    return this._event.parameters[0].value.toString();
  }

  get newAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get VotingControlAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get contractNames(): Array<string> {
    return this._event.parameters[1].value.toStringArray();
  }

  get contractAddresses(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class VotingControlAddressSet extends ethereum.Event {
  get params(): VotingControlAddressSet__Params {
    return new VotingControlAddressSet__Params(this);
  }
}

export class VotingControlAddressSet__Params {
  _event: VotingControlAddressSet;

  constructor(event: VotingControlAddressSet) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Registry extends ethereum.SmartContract {
  static bind(address: Address): Registry {
    return new Registry("Registry", address);
  }

  VotingControlAddress(): Address {
    let result = super.call(
      "VotingControlAddress",
      "VotingControlAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VotingControlAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VotingControlAddress",
      "VotingControlAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  contracts(param0: string): Address {
    let result = super.call("contracts", "contracts(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);

    return result[0].toAddress();
  }

  try_contracts(param0: string): ethereum.CallResult<Address> {
    let result = super.tryCall("contracts", "contracts(string):(address)", [
      ethereum.Value.fromString(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getContractAddress(name: string): Address {
    let result = super.call(
      "getContractAddress",
      "getContractAddress(string):(address)",
      [ethereum.Value.fromString(name)]
    );

    return result[0].toAddress();
  }

  try_getContractAddress(name: string): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getContractAddress",
      "getContractAddress(string):(address)",
      [ethereum.Value.fromString(name)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _VotingControlAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get contractNames(): Array<string> {
    return this._call.inputValues[1].value.toStringArray();
  }

  get contractAddresses(): Array<Address> {
    return this._call.inputValues[2].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddContractCall extends ethereum.Call {
  get inputs(): AddContractCall__Inputs {
    return new AddContractCall__Inputs(this);
  }

  get outputs(): AddContractCall__Outputs {
    return new AddContractCall__Outputs(this);
  }
}

export class AddContractCall__Inputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get contractAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddContractCall__Outputs {
  _call: AddContractCall;

  constructor(call: AddContractCall) {
    this._call = call;
  }
}

export class SetVotingControlAddressCall extends ethereum.Call {
  get inputs(): SetVotingControlAddressCall__Inputs {
    return new SetVotingControlAddressCall__Inputs(this);
  }

  get outputs(): SetVotingControlAddressCall__Outputs {
    return new SetVotingControlAddressCall__Outputs(this);
  }
}

export class SetVotingControlAddressCall__Inputs {
  _call: SetVotingControlAddressCall;

  constructor(call: SetVotingControlAddressCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVotingControlAddressCall__Outputs {
  _call: SetVotingControlAddressCall;

  constructor(call: SetVotingControlAddressCall) {
    this._call = call;
  }
}

export class UpgradeContractCall extends ethereum.Call {
  get inputs(): UpgradeContractCall__Inputs {
    return new UpgradeContractCall__Inputs(this);
  }

  get outputs(): UpgradeContractCall__Outputs {
    return new UpgradeContractCall__Outputs(this);
  }
}

export class UpgradeContractCall__Inputs {
  _call: UpgradeContractCall;

  constructor(call: UpgradeContractCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get newAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class UpgradeContractCall__Outputs {
  _call: UpgradeContractCall;

  constructor(call: UpgradeContractCall) {
    this._call = call;
  }
}