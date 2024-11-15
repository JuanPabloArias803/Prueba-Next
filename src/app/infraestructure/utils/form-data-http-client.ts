const defaultBaseURL ="https://maintenancesystembc-production.up.railway.app/api/v1"

export class FormDataHTTPClient{
    private baseUrl:string;

    constructor(baseURL?:string){
        this.baseUrl=baseURL||defaultBaseURL;
    }

    private async getHeader(token:string){
        return {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`
        }
    }

    private async handleResponse(response: Response) {
        if (!response.ok) {
            const errorData = await response.json();
            throw errorData;
        }
        return await response.json();
    }


    async post<T>(url: string, token:string, formData: BodyInit): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "POST",
            body: formData,
        })
        return this.handleResponse(response);
    }

    async put<T>(url: string, token:string, formData: BodyInit): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PUT",
            body: formData,
        })
        return this.handleResponse(response);
    }

    async patch<T>(url: string, token:string, formData: BodyInit): Promise<T> {
        const headers = await this.getHeader(token);
        const response = await fetch(`${this.baseUrl}/${url}`, {
            headers: headers,
            method: "PATCH",
            body: formData,
        })
        return this.handleResponse(response);
    }
}