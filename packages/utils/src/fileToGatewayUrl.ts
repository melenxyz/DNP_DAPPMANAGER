import { DistributedFile } from "@dappnode/common";
import { normalizeHash } from "./normalizeHash";
import { params } from "@dappnode/params";

/**
 * Return a queriable gateway url for a distributed file
 * @param distributedFile
 * @returns link to fetch file "http://ipfs-gateway/Qm7763518d4"
 */
export function fileToGatewayUrl(distributedFile?: DistributedFile): string {
  // Fallback
  if (!distributedFile || !distributedFile.hash) return "";

  switch (distributedFile.source) {
    case "ipfs":
      return `${params.IPFS_GATEWAY}${normalizeHash(distributedFile.hash)}`;
    default:
      throw Error(`Source not supported: ${distributedFile.source}`);
  }
}
