import { HardhatConfig } from "hardhat/types";

import { TypechainConfig } from "./types";

export function getDefaultTypechainConfig(
  config: HardhatConfig
): TypechainConfig {
  const defaultConfig: TypechainConfig = {
    outDir: "typechain",
    target: "ethers-v5",
  };

  return { ...defaultConfig, ...config.typechain };
}
