import React from "react";
import TodoList from "../components/TodoList/TodoList";
import Tools from "../components/Tools/Tools";
import Header from "../components/header/Header";
import "./Page.css";
export default function Tasks() {
  return (
    <div className="Page">
      <Header
        title={"Todo List:"}
        navigations={[{ link: "/", text: "Exit" }]}
      />
      <Tools
        info={{
          statuses: ["All", "In Progress", "Completed", "Failed"],
          activeStatus: "All",
        }}
      />
      <TodoList />
    </div>
  );
}
