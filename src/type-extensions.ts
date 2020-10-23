import "hardhat/types/runtime";
import "hardhat/types/config";
import { TypechainConfig } from "./types";

declare module "hardhat/types/config" {
  export interface HardhatUserConfig {
    typechain?: TypechainConfig;
  }
  export interface HardhatConfig {
    typechain: TypechainConfig;
  }
}
