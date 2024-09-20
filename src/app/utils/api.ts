import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosRequestConfig,
    AxiosError
  } from 'axios';
  
  interface ErrorResponse {
    message?: string;
  }
  
  export const fetcher = async (
    url: string,
    options?: AxiosRequestConfig
  ): Promise<any> => {
    try {
      // let token = await getApiToken();
      // This is dummy token you're suppose to get accesstoken from cookie or whereever you stored
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const instance: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_HOST,
        timeout: 40000,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`
          // "Access-Control-Allow-Origin": "*",
        }
      });
  
      const response: AxiosResponse = await instance.get(url, options);
      if (!response.data) {
        throw new Error('No data received');
      }
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        const errorMessage =
          axiosError.response.data?.message ||
          'An error occurred during the fetch operation';
        throw new Error(errorMessage);
      } else {
        throw new Error('An error occurred during the fetch operation');
      }
    }
  };
  
  export const poster = async (
    url: string,
    data: any,
    options?: AxiosRequestConfig,
    handleErrorRes?: boolean
  ): Promise<any> => {
    try {
      // let token = await getApiToken();
      // This is dummy token you're suppose to get accesstoken from cookie or whereever you stored
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const instance: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_HOST,
        timeout: 40000,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`
          // "Access-Control-Allow-Origin": "*",
        }
      });
      const response: AxiosResponse = await instance.post(url, data, options);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (handleErrorRes) {
        return axiosError;
      } else if (axiosError && axiosError.response) {
        throw new Error(
          axiosError.response.data.message ||
            'An error occurred during the post operation'
        );
      } else {
        throw new Error('An error occurred during the post operation');
      }
    }
  };
  
  export const updater = async <T = any>(
    url: string,
    data: any,
    options?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      // let token = await getApiToken();
      // This is dummy token you're suppose to get accesstoken from cookie or whereever you stored
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const instance: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_HOST,
        timeout: 40000,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`
          // "Access-Control-Allow-Origin": "*",
        }
      });
      const response: AxiosResponse<T> = await instance.put(url, data, options);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError && axiosError.response) {
        throw new Error(
          axiosError.response.data.message ||
            'An error occurred during the update operation'
        );
      } else {
        throw new Error('An error occurred during the update operation');
      }
    }
  };
  
  export const patcher = async <T = any>(
    url: string,
    data: any,
    options?: AxiosRequestConfig
  ): Promise<T> => {
    try {
      // let token = await getApiToken();
      // This is dummy token you're suppose to get accesstoken from cookie or whereever you stored
      let token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const instance: AxiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_HOST,
        timeout: 40000,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: `Bearer ${token}`
          // "Access-Control-Allow-Origin": "*",
        }
      });
      const response: AxiosResponse<T> = await instance.patch(url, data, options);
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError && axiosError.response) {
        throw new Error(
          axiosError.response.data.message ||
            'An error occurred during the update operation'
        );
      } else {
        throw new Error('An error occurred during the patch operation');
      }
    }
  };
  
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    timeout: 40000,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8'
      // "Access-Control-Allow-Origin": "*",
    }
  });
  
  export default instance;
  