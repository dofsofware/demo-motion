import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene8 = (p: P) => <BaseScene {...p} htmlSrc="scenes/8.html" />;
