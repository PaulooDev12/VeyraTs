import { State } from './state.js';
import { DOMUtils } from './domUtils.js';
import { Client } from './Client.js';
import { DomHandler } from './domManager.js';
import { GlRenderer } from './webGL/glShaderRender.js';
import { VHSRenderer } from './webGL/GLVhs.js';
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
const shaderRender = new GlRenderer('screen');
shaderRender.cleanScreen(0.1, 0.1, 0.1, 1.0);
shaderRender.drawSquare();
const canvas = document.getElementById('vhs-screen');
if (canvas) {
    // 2. Instancia o seu Renderer modificado
    const renderer = new VHSRenderer(canvas);
    // 3. Carrega a imagem e liga o loop
    renderer.loadTexture('https://picsum.photos')
        .then(() => {
        renderer.init();
        console.log("Efeito VHS iniciado com sucesso!");
    })
        .catch(err => console.error("Falha ao carregar textura:", err));
    // INTERATIVIDADE: Altera a distorção da lente baseada no movimento do mouse
    window.addEventListener('mousemove', (evento) => {
        // Mapeia a posição X do mouse para um valor decimal entre 0.0 e 1.5
        const porcentagemX = evento.clientX / window.innerWidth;
        renderer.forca = porcentagemX * 1.5;
    });
}
//# sourceMappingURL=script.js.map