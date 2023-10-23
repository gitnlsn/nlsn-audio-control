import { execPromise } from "nlsn-exec";

export const volume = async (volume: number) => {
  if (!Number.isInteger(volume)) {
    throw new Error("Volume is not integer number");
  }

  if (volume > 100 || volume < 0) {
    throw new Error("Volume out of range. [0-100]");
  }

  return await execPromise(`pactl set-sink-volume @DEFAULT_SINK@ ${volume}%`)
    .then(({ stdout, stderr }) => ({ stdout, stderr }))
    .catch(({ stdout, stderr }) => ({ stdout, stderr }));
};
