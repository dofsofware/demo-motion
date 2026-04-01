import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene18 = (p: P) => <BaseScene {...p} htmlSrc="scenes/18.html" />;
