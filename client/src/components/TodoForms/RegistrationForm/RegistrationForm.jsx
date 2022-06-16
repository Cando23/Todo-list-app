import React, { useState } from "react";
import "../TodoForms.css";
import { useNavigate } from "react-router-dom";
import ErrorNotification from "../../error/ErrorNotification";
import { register } from "../../../utils/API";
export default function RegistrationForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeteadPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatedPassword)
      return setError("Passwords do not match");
    await register({ login: login, password: password })
      .then((res) => {
        console.log(res);
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
        <label>Repeat Password</label>
        <input
          type="password"
          value={repeatedPassword}
          onChange={(e) => setRepeteadPassword(e.target.value)}
        />
        <button className="form__btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
