import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { API_URL_AUTH } from "./axios/ApiURL";

interface AuthState {
    //auth {
    user: null;
    error: null;
    isLoading: boolean;
    // }

    //login
    Login: (email: string, password: string) => Promise<boolean>;

    //register
    register: (email: string, password: string, firstName: string, lastName: string) => Promise<boolean>;

    //check email
    isEmailCheck: null,
    checkEmail: (email: string) => void;

    //verify code
    verifyCode: (code: string) => void;
    isCodeVerify: null;

    //resend code
    resendCode: (email: string) => void;
    isResendCode: null;

    //reset password
    resetPassword: (email: string) => void;
    isResetPassword: null;

    //reset password
    resetPasswordEmail: (token: string, password: string) => void;
    isResetPasswordEmail: null;

    //check auth
    checkAuth: () => Promise<boolean>;

}


const useStoreAuth = create<AuthState>()(
    //   persist(
    (set) => ({
        //auth {
        user: null,
        error: null,
        isLoading: false,
        // }

        //login
        Login: async (email: string, password: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/login`, { email, password })
                console.log('Respuesta de login:', response.data); // Agregado para depuración
                set({ user: response.data, isLoading: false})
                return true;
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
                return false;
            }
        },
        //register
        register: async (email: string, password: string, firstName: string, lastName: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/register`, { email, password, firstName, lastName })
                console.log('Respuesta de registro:', response.data); // Agregado para depuración
                set({ user: response.data, isLoading: false })
                return true;
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
                return false;
            }
        },
        //check email
        isEmailCheck: null,
        checkEmail: async (email: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/check-email`, { email })
                set({ isEmailCheck: response.data.message, isLoading: false })
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
            }
        },
        //verify code
        isCodeVerify: null,
        verifyCode: async (code: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/verify-email`, { code })
                set({ isCodeVerify: response.data.message, isLoading: false })
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
            }
        },
        //resend code
        isResendCode: null,
        resendCode: async (email: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/resend-verification`, { email })
                set({ isResendCode: response.data.message, isLoading: false })
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
            }
        },
        //forgot password
        isResetPassword: null,
        resetPassword: async (email: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/forgot-password`, { email })
                set({ isResetPassword: response.data.message, isLoading: false })
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
            }
        },
        //reset password
        isResetPasswordEmail: null,
        resetPasswordEmail: async (token: string, password: string) => {
            set({ isLoading: true, error: null })
            try {
                const response = await axios.post(`${API_URL_AUTH}/reset-password/${token}`, { password })
                set({ isResetPasswordEmail: response.data.message, isLoading: false })
            } catch (error: any) {
                console.error('Error detallado:', error.response || error);
                set({ error: error.response?.data?.message || 'Error de autenticación', isLoading: false })
            }
        },
        //check auth.
        checkAuth: async () => {
            set({ isLoading: true, error: null });
            try {
                const response = await axios.get(`${API_URL_AUTH}/check-auth`, { withCredentials: true });
                set({ user: response.data.user, isLoading: false });
                return true;
            } catch (error: any) {
                set({ user: null, isLoading: false });
                return false;
            }

        },

    }),
    //     { name: "auth-storage" }
    //   )
);

export default useStoreAuth;
