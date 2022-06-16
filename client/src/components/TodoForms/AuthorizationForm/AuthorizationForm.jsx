import React, { useState } from "react";
import "../TodoForms.css";
import { useNavigate } from "react-router-dom";
import ErrorNotification from "../../error/ErrorNotification";
import { authorize } from "../../../utils/API";
import { useDispatch } from "react-redux";
export default function AuthorizationForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    await authorize({ login: login, password: password })
      .then((res) => {
        dispatch({ type: "LOGIN" });
        navigate("/");
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        {error ? <ErrorNotification description={error} /> : ""}
        <label>Login</label>
        <input
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="form__btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
