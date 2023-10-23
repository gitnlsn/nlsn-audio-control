import { volume } from "../volume";

interface mainProps {
  volume: number;
}

const main = async ({ volume: vol }: mainProps) => {
  await volume(vol);
};

const args = process.argv.slice(2);
main({
  volume: Number(args[0]),
}).catch(console.error);
