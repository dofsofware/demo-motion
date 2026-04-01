import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene3 = (p: P) => <BaseScene {...p} htmlSrc="scenes/3.html" />;
