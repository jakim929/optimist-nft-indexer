import { createConfig } from "@ponder/core";
import { http } from "viem";
import { erc721ABI } from "./abis/erc721ABI";
import { optimism } from "viem/chains";

export default createConfig({
  networks: {
    optimism: {
      chainId: optimism.id,
      transport: http(process.env.PONDER_RPC_URL_10),
    },
  },
  contracts: {
    ERC721: {
      network: "optimism",
      abi: erc721ABI,
      address: "0x2335022c740d17c2837f9c884bfe4ffdbf0a95d5",
      startBlock: 
      49670713,
    },
  },
});
