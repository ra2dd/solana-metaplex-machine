import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { 
  fetchCandyMachine, 
  fetchCandyGuard,
  mplCandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import { publicKey } from "@metaplex-foundation/umi";

async function candyMachineProgram() {
  const umi = createUmi("http://127.0.0.1.8899").use(mplCandyMachine());

  const candyMachinePublicKey = publicKey('');
  const candyMachine = await fetchCandyMachine(umi, candyMachinePublicKey);
  const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);
}