import React from "react";
import { downloadFile } from "../../../utils/API";
import "./TodoItem.css";
import { useNavigate } from "react-router-dom";
export default function TodoItem(props) {
  const navigate = useNavigate();
  const download = async (e) => {
    e.preventDefault();
    await downloadFile(e.target.id, e.target.name);
  };
  return (
    <div className="todo-task">
      <p className="todo-task__text__center">{props.task.title}</p>
      <p className="todo-task__text">Status: {props.task.status}</p>
      <p className="todo-task__text">Must be completed: {props.task.date}</p>
      <p className="todo-task__text">
        Description:
        <button
          className="todo-task__link"
          onClick={download}
          id={props.task._id}
          name={props.task.description}
        >
          {props.task.description}
        </button>
      </p>
      {props.task.status === "In Progress" && (
        <div className="links-container">
          <a
            className="links-container__btn"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/tasks/${props.task._id}/edit`);
            }}
            href={`/tasks/${props.task._id}/edit`}
          >
            Edit
          </a>
        </div>
      )}
    </div>
  );
}
