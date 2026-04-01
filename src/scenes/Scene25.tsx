import { BaseScene } from "./BaseScene";
type P = { inFrame: number; outFrame: number; crossfadeFrames: number };
export const Scene25 = (p: P) => <BaseScene {...p} htmlSrc="scenes/25.html" />;
