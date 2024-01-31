import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {injectable} from 'inversify';

export interface HttpManager {
  get(url: string): Promise<any>;
  post(url: string, body: object): Promise<any>;
}

@injectable()
export class AxiosHttpManager implements HttpManager {
  private http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: '/',
    });

    this.http.interceptors.request.use(this._handleRequest, this._handleError);
    this.http.interceptors.response.use(this._handleSuccess, this._handleError);
  }

  get(url: string): Promise<AxiosResponse> {
    return this.http.get(url);
  }

  post(url: string, body: object): Promise<AxiosResponse> {
    return this.http.post(url, body);
  }

  private _handleRequest = (config: InternalAxiosRequestConfig) => {
    return config;
  };

  private _handleError = (error: any) => {
    return Promise.reject(error);
  };

  private _handleSuccess(response: AxiosResponse) {
    return response;
  }
}
