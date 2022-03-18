/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILendingPoolAddressesProvider,
  ILendingPoolAddressesProviderInterface,
} from "../ILendingPoolAddressesProvider";

const _abi = [
  {
    inputs: [],
    name: "getLendingPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ILendingPoolAddressesProvider__factory {
  static readonly abi = _abi;
  static createInterface(): ILendingPoolAddressesProviderInterface {
    return new utils.Interface(_abi) as ILendingPoolAddressesProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILendingPoolAddressesProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILendingPoolAddressesProvider;
  }
}