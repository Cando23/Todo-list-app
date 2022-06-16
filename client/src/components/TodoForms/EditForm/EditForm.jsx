import React, { useEffect, useState } from "react";
import fileIcon from "../../../assets/file.png";
import "./EditForm.css";
import "../TodoForms.css";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../../../utils/API";
import ErrorNotification from "../../error/ErrorNotification";
export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [error, setError] = useState("");
  useEffect(() => {
    const getTask = async () => {
      await getTaskById(id)
        .then((res) => {
          setTitle(res.data.title);
          setFile({ name: res.data.description || "Choose file" });
        })
        .catch((error) => console.log(error));
    };
    getTask();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (file.name !== "Choose file") data.append("filedata", file);
    data.append("title", title);
    data.append("status", status);
    await updateTask(id, data)
      .then((response) => {
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
        <label>Task title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Status</label>
        <select
          className="status-container"
          name="taskStatus"
          defaultValue={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="file-container">
          <img id="upload-image" src={fileIcon} alt="" />
          <input
            id="file-input"
            type="file"
            name="filedata"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file-input">{file.name}</label>
        </div>
        <button className="form__btn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
