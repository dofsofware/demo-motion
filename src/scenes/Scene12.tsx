import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene12 = (p: P) => <BaseScene {...p} htmlSrc="scenes/12.html" />;
