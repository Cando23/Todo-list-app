import React from "react";
import CreateForm from "../components/TodoForms/CreateForm/CreateForm";
import "./Page.css";
import Header from "../components/header/Header";
export default function NewTask() {
  return (
    <div className="Page">
         <Header
          title={"New Task:"}
        navigations={[
          { link: "/", text: "Home" },
          { link: "/", text: "Exit" }
        ]}
      />
      <CreateForm />
    </div>
  );
}
