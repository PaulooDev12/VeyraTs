interface ApiResponse<T> {
    message?: string;
    status: number;
    data: T;
    timeStamp: Date;
}
export declare class Client {
    get<T>(url: string): Promise<ApiResponse<T>>;
}
export {};
//# sourceMappingURL=Client.d.ts.map