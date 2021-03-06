import { FC, useState } from "react";
import "./signup.css";
import axios from "axios";
import { RouteChildrenProps } from "react-router-dom";

const Signup: FC<RouteChildrenProps> = ({ history }) => {
  const [redFlag, setRedFlag] = useState(false);

  const CreateAccount = (e: any) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.secondPassword.value) {
      setRedFlag(true);
    } else {
      const userInfo = {
        username: e.target.userName.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };

      axios
        .post("http://localhost:4000/api/users/", userInfo)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          alert(err.response.data);
        });
    }
  };

  return (
    <div className="container">
      <div className="signup-form">
        <form className="form" onSubmit={CreateAccount}>
          <input
            className="signup-inputs"
            type="text"
            name="userName"
            placeholder="Username"
            required
          />
          <input
            className="signup-inputs"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="signup-inputs"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="signup-inputs"
            name="secondPassword"
            type="password"
            placeholder="Password"
            required
          />
          <button id="but-ca" className="signup-inputs" type="submit">
            {" "}
            Create Account
          </button>
          {redFlag ? (
            <div className="redFlag">
              {" "}
              smoothing went wrong, please try again
            </div>
          ) : (
            <div></div>
          )}
        </form>
      </div>
      <div className="image-signup">
        <img id="sig-img" src="images/Images-pana.png" alt="" />
        <span className="login">
          You already have an account?{" "}
          <a onClick={() => history.push("/login")} href="#">
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default Signup;
