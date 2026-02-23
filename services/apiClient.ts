import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const effectiveBaseUrl = baseUrl;


const client = axios.create({
    baseURL: effectiveBaseUrl,
    timeout: 120000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    withCredentials: true,
});


client.interceptors.response.use(
    (response) => {

        return response.data;
    },
    async (error) => {
        console.error("API Error:", error);
        if (error.response) {
            // مثال: خطاهای کلاینت (4xx) یا سرور (5xx)
            return Promise.reject({
                status: error.response.status,
                message: error.response.data?.message || error.message, // سعی کنید پیام خطا را از response بگیرید
                data: error.response.data
            });
        } else if (error.request) {
            // درخواست ارسال شده ولی پاسخی دریافت نشده
            return Promise.reject({
                status: 'NETWORK_ERROR',
                message: 'No response received from server.',
                data: null
            });
        } else {
            // خطای دیگری رخ داده است
            return Promise.reject({
                status: 'UNKNOWN_ERROR',
                message: error.message,
                data: null
            });
        }
    }
);

export default client;
