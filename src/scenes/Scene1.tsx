import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene1 = (p: P) => <BaseScene {...p} htmlSrc="scenes/1.html" />;
