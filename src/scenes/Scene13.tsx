import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene13 = (p: P) => <BaseScene {...p} htmlSrc="scenes/13.html" />;
