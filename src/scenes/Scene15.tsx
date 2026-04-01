import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene15 = (p: P) => <BaseScene {...p} htmlSrc="scenes/15.html" />;
