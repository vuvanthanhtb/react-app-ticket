import { useEffect } from "react";
import LoginService from "../services";

const service = new LoginService();

const LoginPage = (props) => {
  console.log("LoginRoutes props:", props);

  const login = async () => {
    const data = {
      username: "",
      password: "XXXXX",
    };

    await service.login(data);
  };

  useEffect(() => {
    document.title = "Login - Ticket Booking";
    login();
  }, []);

  return (
    <div>
      <h1>Login Page</h1>
    </div>
  );
};

export default LoginPage;
