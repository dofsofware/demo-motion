import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene10 = (p: P) => <BaseScene {...p} htmlSrc="scenes/10.html" />;
