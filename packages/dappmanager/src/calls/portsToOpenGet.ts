import getPortsToOpen from "../daemons/natRenewal/getPortsToOpen.js";
import { listPackageContainers } from "@dappnode/dockerapi";
import { PackageContainer, PortToOpen } from "@dappnode/common";

/**
 * Returns ports to be opened
 */
export async function portsToOpenGet(): Promise<PortToOpen[]> {
  const containers: PackageContainer[] = await listPackageContainers();
  return getPortsToOpen(containers); // Ports to be opened
}
