import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...rest} {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default ProtectedRoute;
