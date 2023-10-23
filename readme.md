# nlsn-audio-control

Implements bash interface to control volume with pactl on top of `child_process`.

# Usage

```ts
import { volume } from "nlsn-audio-control";

// Sets linux volume with pactl:
// pactl set-sink-volume @DEFAULT_SINK@ 10%
volume(10).catch(console.error);
```
