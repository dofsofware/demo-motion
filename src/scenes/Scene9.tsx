import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene9 = (p: P) => <BaseScene {...p} htmlSrc="scenes/9.html" />;
