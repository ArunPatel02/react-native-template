import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import AxiosInstance from '../../services/Api';
import { AxiosHeaders } from 'axios';

// Define a type for the slice state
interface CounterState {
    device_id?: string;
    ip_address?: string;
    os_version?: string;
    os_type?: "ios" | "android" | "windows" | "macos" | "web" | '';
    app_version?: string;
    build_number?: string;
    push_token?: string | null;
    device_company?: string;
    device_model?: string;
    device_date_time?: string;
    device_timezone?: number | null;
}

// Define the initial state using that type
const initialState: CounterState = {
    device_id : '',
    ip_address : '',
    os_version : '',
    os_type : '',
    app_version : '',
    build_number : '',
    push_token : '',
    device_company : '',
    device_model : '',
    device_date_time : '',
    device_timezone : null,
};

export const systemSlice = createSlice({
    name: 'system',
    initialState,
    reducers: {
        setSystemData: (state, action: PayloadAction<CounterState>) => {
            // console.log("this is data" , action.payload)
            AxiosInstance.interceptors.request.use(async function (config) {
                // Do something before request is sent
                // console.log(
                //   'this is header Data --- ', action.payload
                // );
                config.headers = new AxiosHeaders({
                    ...config.headers,
                    ...action.payload,
                });
                return config;
              });
            state = action.payload;
        },
    },
});

export const { setSystemData } = systemSlice.actions;

const systemReducer = systemSlice.reducer;

export default systemReducer