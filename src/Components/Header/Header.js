import React from 'react';
import './Header.css';
import logo from "./logo.png";
import { GiKnifeFork } from "react-icons/gi";

const Header = () => {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid header">
            <img src={logo} width="120" height="60" alt="logo" className="mx-2"/>
            <a className="navbar-brand text-primary fw-bolder" href="./food">Food Lover <GiKnifeFork/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="fw-bolder navbar-nav ms-auto mb-2 mb-lg-0 fw-bolder">
             <li className="nav-item "><a className="nav-link" href="./home">Home</a></li>
             <li className="nav-item"><a className="nav-link" href="./about">About Us</a>
             </li>
             <li className="nav-item"><a className="nav-link" href="./order">Your Order</a></li>
             <li className="nav-item"><a className="nav-link" href="./logIn">Log In</a></li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;