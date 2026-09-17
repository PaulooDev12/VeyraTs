export class DOMUtils{
    static getElement<T extends HTMLElement>(selector: string): T | null{
        
        return document.querySelector(selector);
    }
    
}