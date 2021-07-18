import { useState, useEffect } from "react";
import axios from "./api";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./Home";
import Gallery from "./components/gallery";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  const [user, setUser] = useState(null, (s) => {
    console.log(s);
    s && setLoading(false);
  });
  const [loading, setLoading] = useState(false);

  const athenticate = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/auth/user");
      setUser(res.data);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("before", user);
    athenticate();
  }, []);

  const handleLogin = () => {
    setUser(true);
  };

  if (loading) {
    return <h1>wait ??</h1>;
  }
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/login"
          render={(routeProps) => (
            <Login {...routeProps} handleLogin={handleLogin} />
          )}
        />
        <ProtectedRoute path="/gallery" component={Gallery} user={user} />
      </Switch>
    </main>
  );
};

export default Router;
