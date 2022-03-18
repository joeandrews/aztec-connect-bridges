/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISafeEngine, ISafeEngineInterface } from "../ISafeEngine";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "approveSAFEModification",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "coinBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "collateralType",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "safe",
        type: "address",
      },
    ],
    name: "safes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "lockedCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "generatedDebt",
            type: "uint256",
          },
        ],
        internalType: "struct ISafeEngine.SAFE",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISafeEngine__factory {
  static readonly abi = _abi;
  static createInterface(): ISafeEngineInterface {
    return new utils.Interface(_abi) as ISafeEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISafeEngine {
    return new Contract(address, _abi, signerOrProvider) as ISafeEngine;
  }
}