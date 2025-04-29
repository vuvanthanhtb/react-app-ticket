import LoginModel from "./login.model";
import RequestService from "services/request.service";

class LoginService {
  #service = null;

  constructor() {
    this.#service = new RequestService(LoginModel);
  }

  login = async (data) => {
    try {
      const response = await this.#service.methodRequest("login", data, "POST");
      return response;
    } catch (error) {
      return error;
    }
  }

  logout = async (data) => await this.#service.methodRequest("logout", data, "POST");
}

export default LoginService;
