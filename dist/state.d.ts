export declare class State<T> {
    private value;
    private listeneres;
    constructor(value: T);
    get(): T;
    set(value: T): void;
    subscribe(listener: (value: T) => void): void;
}
//# sourceMappingURL=state.d.ts.map