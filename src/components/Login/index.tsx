import { FC, useState } from "react";
import "./login.css";
import axios from "axios";

const Login: FC = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const loginWithAccount = async (e: any) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/users/login",
        userInfo
      );
      console.log(res);
    } catch (err) {
      alert(err.response.data);
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
          <button className="signup-inputs" type="submit">
            {" "}
            Login
          </button>
        </form>
      </div>
      <div className="image-signup">
        <img src="images/signup-image.jpg" alt="" />
        <span className="login">
          You don't have an account? <a href="">Sign up</a>
        </span>
      </div>
    </div>
  );
};

export default Login;
