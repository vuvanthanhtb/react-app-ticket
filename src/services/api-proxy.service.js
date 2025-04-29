import axios from "axios";
import API_METHODS from "utils/api-method";
import { SYSTEM_BUSY } from "utils/message";

class ApiProxyService {
  #axios_instance = null;
  #headers = {
    "Content-Type": "application/json",
  };

  constructor() {
    this.#axios_instance = axios.create({
      baseURL: "",
      timeout: 1000,
      withCredentials: true,
    });

    this.#axios_instance.interceptors.response.use(
      (response) => response,
      (error) => this.#errorHandler(error)
    );
  }

  methodRequest = (endpoint, data, method, headers) => {
    let apiUrl = endpoint;
    const config = {
      headers: {
        ...this.#headers,
        ...headers,
      },
    };

    if (method === API_METHODS.GET) {
      const queryString = new URLSearchParams(data).toString();
      apiUrl = `${endpoint}?${queryString}`;
    } else if (method === API_METHODS.POST) {
      config["data"] = data;
    }

    return this.#axios_instance
      .post({
        method: method,
        url: apiUrl,
        ...config,
      })
      .catch((error) => {
        throw error;
      });
  };

  #errorHandler = async (error) => {
    if (error && error.response && error.response.status === 401) {
      console.error("Unauthorized access - redirecting to login");
    }

    if (error && error.response) {
      return Promise.reject({
        status: error.response.status,
        message: error.response.data.message || SYSTEM_BUSY,
      });
    }
    return Promise.reject(error);
  };
}

export default ApiProxyService;
