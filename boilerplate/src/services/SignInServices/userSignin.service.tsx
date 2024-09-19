import AxiosInstance from "../Api"

export const userSignIn = async (data : any)=>{
    try {
        const response = await AxiosInstance.post('/api/v1/signin', data);
        return response;
    } catch (error) {
        throw error;
    }
}