export class State {
    value;
    listeneres = [];
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(value) {
        this.value = value;
        this.listeneres.forEach(listner => {
            listner(this.value);
        });
    }
    subscribe(listener) {
        this.listeneres.push(listener);
    }
}
//# sourceMappingURL=state.js.map