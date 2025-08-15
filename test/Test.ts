import assert from "assert";
import { 
  TestHelpers,
  PerpVaultEvmInterface_DepositCollateral
} from "generated";
const { MockDb, PerpVaultEvmInterface } = TestHelpers;

describe("PerpVaultEvmInterface contract DepositCollateral event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for PerpVaultEvmInterface contract DepositCollateral event
  const event = PerpVaultEvmInterface.DepositCollateral.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("PerpVaultEvmInterface_DepositCollateral is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await PerpVaultEvmInterface.DepositCollateral.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualPerpVaultEvmInterfaceDepositCollateral = mockDbUpdated.entities.PerpVaultEvmInterface_DepositCollateral.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedPerpVaultEvmInterfaceDepositCollateral: PerpVaultEvmInterface_DepositCollateral = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      sender: event.params.sender,
      erc20Amount: event.params.erc20Amount,
      vaultAddress: event.params.vaultAddress,
      bankDenom: event.params.bankDenom,
      bankAddress: event.params.bankAddress,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualPerpVaultEvmInterfaceDepositCollateral, expectedPerpVaultEvmInterfaceDepositCollateral, "Actual PerpVaultEvmInterfaceDepositCollateral should be the same as the expectedPerpVaultEvmInterfaceDepositCollateral");
  });
});
