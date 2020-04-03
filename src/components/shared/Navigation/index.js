// first import react, (optional) style file & assets.
import React, { useEffect } from "react";
import "./navigation.style.css";
import ReactLogo from "../../../assets/images/logo.svg";
import ReduxLogo from "../../../assets/images/reduxlogo.png";

// second, import the packages that are installed through npm
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

// third, import components / actions / reducers
import MenuActions from "../../../redux/actions/menuActions";

const Navigation = props => {
  const location = useLocation();

  // user has navigated directly to a page...
  useEffect(() => {
    // be very carefull not to set props or state without proper if-statements
    if(location.pathname !== props.menu.active){
      props.setActiveMenu(location.pathname);
    }
  }, [location, props]);
  
  return (
    <header>
      <div className="logo">
        <img className="logo__image" src={ReactLogo} alt="React" />
        <span className="logo__text"> - </span>
        <img className="logo__image" src={ReduxLogo} alt="Redux" />
      </div>
      <nav>
        <ul className="nav">
          <li className={props.menu.active === "/" ? "nav__item--selected nav__item" : "nav__item"}>
            <Link onClick={() => {props.setActiveMenu("/")}} to="/">Home</Link>
          </li>
          <li className={props.menu.active === "/contact" ? "nav__item--selected nav__item" : "nav__item"}>
            <Link onClick={() => {props.setActiveMenu("/contact")}} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    ...state.MenuReducer
  };
};

const mapDispatchToProps = dispatch => ({
  setActiveMenu: activemenu => dispatch(MenuActions.setActiveMenu(activemenu))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
