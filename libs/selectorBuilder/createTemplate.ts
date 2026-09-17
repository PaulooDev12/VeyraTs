export type elementTypes = 'div' | 'section' | 'main';

export class Template extends HTMLElement{
    constructor(private element: elementTypes, private content: string){
        super();
        const shadow = this.attachShadow({ mode: 'open'});



        const elemenet = document.createElement(this.element);
        elemenet.innerHTML = this.content;

        shadow.appendChild(elemenet);
    }
}
