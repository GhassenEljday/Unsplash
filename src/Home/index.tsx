import { FC } from "react";
import { RouteChildrenProps } from "react-router-dom";
import "./home.css";

const Home: FC<RouteChildrenProps> = ({ history }) => {
  return (
    <div className="home-container">
      <div className="first-slide">
        <div className="welcoming">
          <h1 id="co-name">My Unsplash</h1>
          <p id="home-info">
            An online art gallery is a website that display artworks. Usually,
            the online gallery is run as a business, with the purpose of
            displaying the artwork being to promote it to potential buyers. ...
            An online art market for collectors also known as an online
            secondary market.
          </p>
          <button onClick={() => history.push("/signup")} id="but-ca">
            Create an Account
          </button>
        </div>
        <div className="image">
          <img id="gallery" src="images/Online gallery-bro.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
