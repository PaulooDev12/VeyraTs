export class Template extends HTMLElement {
    element;
    content;
    constructor(element, content) {
        super();
        this.element = element;
        this.content = content;
        const shadow = this.attachShadow({ mode: 'open' });
        const elemenet = document.createElement(this.element);
        elemenet.innerHTML = this.content;
        shadow.appendChild(elemenet);
    }
}
//# sourceMappingURL=createTemplate.js.map