import { TypechainConfig } from "./types";

declare module "hardhat/types" {
  interface HardhatConfig {
    typechain?: TypechainConfig;
  }
}
