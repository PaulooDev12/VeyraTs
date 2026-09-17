export class DomHandler<T extends HTMLElement>{
    constructor(private element: T) {}

    addClass(className: string){
        this.element.classList.add(className);
    }
    removeClass(className: string){
        this.element.classList.remove(className);
    }
    setText(text: string){
        this.element.innerText = text;
    }
    setRotation(x: number, y: number): void {
  this.element.style.transform =
    `perspective(700px) rotateX(${x}deg) rotateY(${y}deg)`;
}
}