import axios from "axios";

class HttpService {
    public postRequest = (url: string, data: unknown): Promise<any> => {

        const http = axios.create({
            baseURL: process.env.BACKEND_URL,
        });

        return http.post(url, data)
            .then(
                (response: any) => response,
                (error: Error) => Promise.reject(error)
            );
    };
}

export default HttpService;
