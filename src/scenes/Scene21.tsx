import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene21 = (p: P) => <BaseScene {...p} htmlSrc="scenes/21.html" />;
