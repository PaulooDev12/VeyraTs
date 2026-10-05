import { State } from './state.js';
import { DOMUtils } from './domUtils.js';
import { Client } from './Client.js';
import { DomHandler } from './domManager.js';
import { VHSRenderer } from './webGL/GLVhs.js';
import { ShaderRenderer } from './webGL/RenderShader.js';
import { blurShaderRenderer } from './webGL/blurRenderer.js';
const api = new Client();
const data = await api.get('src/data.json');
console.log(data);
const texto = DOMUtils.getElement('#texto');
const handler = new DomHandler(texto);
handler.addClass("azul");
const mouseState = new State({
    x: 0,
    y: 0
});
const text = new DomHandler(DOMUtils.getElement('#texto'));
const card = new DomHandler(DOMUtils.getElement('#card'));
mouseState.subscribe(({ x, y }) => {
    text.setText(`X: ${x} | Y: ${y}`);
});
mouseState.subscribe(({ x, y }) => {
    card.setRotation(x, y);
});
document.addEventListener('mousemove', (event) => {
    mouseState.set({
        x: event.clientX,
        y: event.clientY
    });
});
const vhsCanvas = document.getElementById('vhs-screen');
if (vhsCanvas) {
    const vhs = new VHSRenderer(vhsCanvas);
    vhs.setTexture('/imgs/content.png').then(() => {
        vhs.start();
    }).catch(err => console.error("Erro ao carregar a imagem ", err));
}
const bluredShader = DOMUtils.getElement('#blur');
if (bluredShader) {
    const renderer = new blurShaderRenderer(bluredShader);
    renderer.setTexture('/imgs/content.png').then(() => {
        renderer.start();
        console.log("renderer iniciado");
    }).catch((err) => {
        console.error("Erro ao carregar textura", err);
    });
}
// dom utils é uma função da biblioteca 
const chr = DOMUtils.getElement('#chr');
if (chr) {
    const shaderRender = new ShaderRenderer(chr);
    shaderRender.setTexture('/imgs/wpp.png').then(() => {
        shaderRender.start();
    }).catch((err) => console.error(err));
}
//# sourceMappingURL=script.js.map