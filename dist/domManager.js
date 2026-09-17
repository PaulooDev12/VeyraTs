export class DomHandler {
    element;
    constructor(element) {
        this.element = element;
    }
    addClass(className) {
        this.element.classList.add(className);
    }
    removeClass(className) {
        this.element.classList.remove(className);
    }
    setText(text) {
        this.element.innerText = text;
    }
    setRotation(x, y) {
        this.element.style.transform =
            `perspective(700px) rotateX(${x}deg) rotateY(${y}deg)`;
    }
}
//# sourceMappingURL=domManager.js.map