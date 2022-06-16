import React from "react";
import RegistrationForm from "../components/TodoForms/RegistrationForm/RegistrationForm";
import "./Page.css";
import Header from "../components/header/Header";
export default function Registration() {
  return (
    <div className="Page">
      <Header
        title={"Sign up new account:"}
        navigations={[{ link: "/", text: "Login" }]}
      />
      <RegistrationForm />
    </div>
  );
}
