import React, { Component } from "react";
import "./navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="first-field">
          <li id="logo">
            <img src="images/camera.svg" alt="" />
            <p>Unsplash</p>
          </li>
          <li id="search">
            <div className="search-input">
              <button id="ser">
                <img src="images/loupe.svg" alt="" />
              </button>
              <input type="text" placeholder="Search by name" />
            </div>
          </li>
        </ul>
        <button id="add-pic">Add a photo</button>
      </nav>
    );
  }
}
