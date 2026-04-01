import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene2 = (p: P) => <BaseScene {...p} htmlSrc="scenes/2.html" />;
