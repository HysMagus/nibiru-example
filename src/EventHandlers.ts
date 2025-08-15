/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  PerpVaultEvmInterface,
  PerpVaultEvmInterface_DepositCollateral,
  PerpVaultEvmInterface_OwnershipTransferred,
  PerpVaultEvmInterface_PerpContractAddressChangeProposed,
  PerpVaultEvmInterface_PerpContractAddressChanged,
} from "generated";

PerpVaultEvmInterface.DepositCollateral.handler(async ({ event, context }) => {
  const entity: PerpVaultEvmInterface_DepositCollateral = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    erc20Amount: event.params.erc20Amount,
    vaultAddress: event.params.vaultAddress,
    bankDenom: event.params.bankDenom,
    bankAddress: event.params.bankAddress,
  };

  context.PerpVaultEvmInterface_DepositCollateral.set(entity);
});

PerpVaultEvmInterface.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: PerpVaultEvmInterface_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.PerpVaultEvmInterface_OwnershipTransferred.set(entity);
});

PerpVaultEvmInterface.PerpContractAddressChangeProposed.handler(async ({ event, context }) => {
  const entity: PerpVaultEvmInterface_PerpContractAddressChangeProposed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAddress: event.params.newAddress,
    effectiveTimestamp: event.params.effectiveTimestamp,
  };

  context.PerpVaultEvmInterface_PerpContractAddressChangeProposed.set(entity);
});

PerpVaultEvmInterface.PerpContractAddressChanged.handler(async ({ event, context }) => {
  const entity: PerpVaultEvmInterface_PerpContractAddressChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldAddress: event.params.oldAddress,
    newAddress: event.params.newAddress,
  };

  context.PerpVaultEvmInterface_PerpContractAddressChanged.set(entity);
});
