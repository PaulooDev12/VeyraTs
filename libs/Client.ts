interface ApiResponse<T>{
    message?: string,
    status: number,
    data: T,
    timeStamp: Date
}

export class Client{

    async get<T>(url: string): Promise<ApiResponse<T>>{
        const response = await fetch(url);
        
        
        if(!response.ok){
            console.error();
        }

        const data: T = await response.json()

        const res: ApiResponse<T> = {
            status: response.status,
            data: data,
            timeStamp: new Date()
        }
        return res;
    }
}