import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene22 = (p: P) => <BaseScene {...p} htmlSrc="scenes/22.html" />;
