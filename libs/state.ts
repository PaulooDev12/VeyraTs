export class State<T>{
    private listeneres: Array<(value: T) => void> = [];

    constructor(private value: T){}

    get(): T {
        return this.value
    }
    set(value: T): void{
        this.value = value;
        this.listeneres.forEach(listner => {
            listner(this.value);
        })
    
    }
    subscribe(listener: (value: T) => void): void{
        this.listeneres.push(listener);
    }
}