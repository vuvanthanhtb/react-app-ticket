import API_METHODS from "utils/api-method";
import apiPath from "./api-path";
import LoginModel from "./login.model";
import RequestService from "services/request.service";

class LoginService {
  #service = null;

  constructor() {
    this.#service = new RequestService();
  }

  login = async (data) => {
    try {
      const response = await this.#service.methodRequest(
        apiPath.login,
        data,
        LoginModel,
        API_METHODS.POST
      );
      return response;
    } catch (error) {
      return error;
    }
  };

  logout = async (data) =>
    await this.#service.methodRequest(
      apiPath.logout,
      data,
      null,
      API_METHODS.POST
    );
}

export default LoginService;
