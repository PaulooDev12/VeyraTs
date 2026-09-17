export class Client {
    async get(url) {
        const response = await fetch(url);
        if (!response.ok) {
            console.error();
        }
        const data = await response.json();
        const res = {
            status: response.status,
            data: data,
            timeStamp: new Date()
        };
        return res;
    }
}
//# sourceMappingURL=Client.js.map