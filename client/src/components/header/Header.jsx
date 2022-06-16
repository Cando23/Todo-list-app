import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../utils/API";
export default function Header(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__text">{props.title}</p>
        <nav className="header__navigation">
          {props.navigations.map((navigation, i) => {
            return (
              <a
                key={i}
                className="navigation__link"
                onClick={async (e) => {
                  e.preventDefault();
                  if (e.target.text === "Exit") {
                    await logout();
                    dispatch({ type: "LOGOUT"});
                  }
                  navigate(navigation.link);
                }}
                href="/"
              >
                {navigation.text}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
