import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import { filterByStatus } from "../../utils/API";
export default function TodoList() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTasks = async () => {
      await filterByStatus("All")
        .then((res) => {
          dispatch({ type: "FILTER_LIST", payload: res.data });
        })
    };
    getTasks();
  }, [dispatch]);

  const list = useSelector((state) => state.tasks.data);
  return (
    <div className="todo-list">
      {list.map((task) => (
        <TodoItem task={task} key={task._id} />
      ))}
    </div>
  );
}
