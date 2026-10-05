import { State } from './state.js';
import { DOMUtils } from './domUtils.js';
import { Client } from './Client.js';
import { DomHandler } from './domManager.js';
import { VHSRenderer } from './webGL/GLVhs.js';
import { ShaderRenderer } from './webGL/RenderShader.js';
import { blurShaderRenderer } from './webGL/blurRenderer.js';

interface MouseState{
  x: number;
  y: number;
  normX: number;
  normY: number;
}
const mouseState = new State<MouseState>({x: 0, y: 0, normX: 0, normY: 0});

const vhsCanvas = DOMUtils.getElement('#vhs-screen') as HTMLCanvasElement;
const blurCanvas = DOMUtils.getElement('#blur') as HTMLCanvasElement;
const chrCanvas = DOMUtils.getElement('#chr') as HTMLCanvasElement;

let vhs: VHSRenderer | null = null;
let blur: blurShaderRenderer | null = null;
let chr: ShaderRenderer | null = null;

if(vhsCanvas) {
  vhs = new VHSRenderer(vhsCanvas);
  vhs.setTexture('/imgs/content.png').then(() => vhs?.start())
}

if (blurCanvas) {
    blur = new blurShaderRenderer(blurCanvas);
    blur.setTexture('/imgs/content.png').then(() => blur?.start());
}

if (chrCanvas) {
    chr = new ShaderRenderer(chrCanvas);
    chr.setTexture('/imgs/wpp.png').then(() => chr?.start());
}

mouseState.subscribe(({x, y, normX, normY}) => {
    if(vhs){
      vhs.distorcion = normX * 0.20;
      vhs.forca = normY * 0.5;
    }

    if(blur){
      blur.directionX = ((normY - 0.5) * 5.0) * -1;
      blur.directionY = (normX - 0.5) * 5.0;
    }
    if(chr){
      chr.intensidade = Math.sin(normX * Math.PI) * 1.5;
    }
});

window.addEventListener('mousemove', (event) => {
  mouseState.set({
    x: event.clientX,
    y: event.clientY,
    normX: event.clientX / window.innerWidth,
    normY: event.clientY / window.innerHeight,
  })
})