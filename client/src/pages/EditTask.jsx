import React from "react";
import EditForm from "../components/TodoForms/EditForm/EditForm";
import "./Page.css";
import Header from "../components/header/Header";
export default function EditTask() {
  return (
    <div className="Page">
      <Header
        title={"Change task:"}
        navigations={[
          { link: "/", text: "Home" },
          { link: "/", text: "Exit" }
        ]}
      />
      <EditForm />
    </div>
  );
}
