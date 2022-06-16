import React from "react";
import AuthorizationForm from "../components/TodoForms/AuthorizationForm/AuthorizationForm";
import "./Page.css";
import Header from "../components/header/Header";
export default function Login() {
  return (
    <div className="Page">
      <Header
        title={"Sign in Todo List:"}
        navigations={[
          { link: "/register", text: "Register" }
        ]}
      />
      <AuthorizationForm />
    </div>
  );
}
