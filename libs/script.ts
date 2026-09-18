import { State } from './state.js';
import { DOMUtils } from './domUtils.js';
import { Client } from './Client.js';
import { DomHandler } from './domManager.js';
import { GlRenderer } from './webGL/glShaderRender.js';
import { VHSRenderer } from './webGL/GLVhs.js';
import { ShaderRenderer } from './webGL/RenderShader.js';



const api = new Client();
const data = await api.get('src/data.json')
console.log(data)
const texto = DOMUtils.getElement('#texto')!;
const handler = new DomHandler(texto);
handler.addClass("azul");

interface MousePosition {
    x: number;
    y: number;
}
const mouseState = new State<MousePosition>({
    x: 0,
    y: 0
})
const text = new DomHandler(
  DOMUtils.getElement('#texto')!
);

const card = new DomHandler(
  DOMUtils.getElement('#card')!
);

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


const canvas = document.getElementById('vhs-screen') as HTMLCanvasElement;


if (canvas) {

    const renderer = new VHSRenderer(canvas);


    renderer.loadTexture('/imgs/content.png')
        .then(() => {
            renderer.init();
            console.log("Efeito VHS iniciado com sucesso!");
        })
        .catch(err => console.error("Falha ao carregar textura:", err));


    window.addEventListener('mousemove', (evento) => {
        const porcentagemX = evento.clientX / window.innerWidth;
        renderer.forca = porcentagemX * 1.5; 
    });
}

const shader = DOMUtils.getElement('#shader')! as HTMLCanvasElement;
if(shader) {
  const rednerer = new VHSRenderer(shader);
  rednerer.loadTexture('/imgs/wpp.png')
  .then(() => {
    rednerer.init();
    console.log("Render carregado nessa porra!!!!!");
  })
  .catch(err => console.error("Num funcionô :("));
  shader.addEventListener('mousemove', (ev) => {
    const percentY = ev.clientY / window.innerWidth;
    rednerer.distorcion = Math.sin(Math.sqrt(percentY));
    rednerer.forca = percentY * 3.3;
  })
}