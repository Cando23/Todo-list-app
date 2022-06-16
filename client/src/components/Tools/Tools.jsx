import React from "react";
import FilterTool from "./FilterTool/FilterTool";
import "./Tools.css";
import { useNavigate } from "react-router-dom";
export default function Tools(props) {
  const navigate = useNavigate();
  return (
    <div className="tools-container">
      <FilterTool info={props.info} />
      <div className="edit-container">
        <p className="edit-container__text">New task</p>
        <a
          className="edit-container__link-task"
          onClick={(e) => {
            e.preventDefault();
            navigate("/tasks/new");
          }}
          href="/tasks/new"
        >
          Create
        </a>
      </div>
    </div>
  );
}
