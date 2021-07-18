import { FC, useState } from "react";
import "./login.css";
import axios from "../../api";
import { RouteChildrenProps } from "react-router-dom";

const Login: FC<{ handleLogin: () => void } & RouteChildrenProps> = ({
  handleLogin,
  history,
}) => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const loginWithAccount = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", userInfo);
      localStorage.setItem("token", res.data);
      handleLogin();
      history.push("/gallery");
    } catch (err) {
      console.log(err);
    }
  };

  const handelChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="signup-form">
        <form className="form" onSubmit={loginWithAccount}>
          <input
            className="signup-inputs"
            type="text"
            name="username"
            placeholder="Username"
            onChange={handelChange}
            required
          />
          <input
            className="signup-inputs"
            name="password"
            type="password"
            placeholder="Password"
            onChange={handelChange}
            required
          />
          <button id="but-ca" className="signup-inputs" type="submit">
            {" "}
            Login
          </button>
        </form>
      </div>
      <div className="image-signup">
        <img id="sig-img" src="images/Images-cuate.png" alt="" />
        <span className="login">
          You don't have an account?{" "}
          <a onClick={() => history.push("/signup")} href="#">
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
