import AxiosInstance from "../Api"

export const userSignIn = async (data : any)=>{
    try {
        const response = await AxiosInstance.post('/api/v1/signin', data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAuthUser = async ()=>{
    try {
        const response = await AxiosInstance.get('/api/v1/auth/user');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const checkForceUpdate = async ()=>{
    try {
        const response = await AxiosInstance.post('/api/v1/auth/user');
        return response.data;
    } catch (error) {
        throw error;
    }
}