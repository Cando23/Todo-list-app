import React, { useState } from "react";
import "../TodoForms.css";
import fileIcon from "../../../assets/file.png";
import { createTask } from "../../../utils/API";
import { useNavigate } from "react-router-dom";
import ErrorNotification from "../../error/ErrorNotification";
export default function CreateForm() {
  const navigate = useNavigate();
  const [file, setfile] = useState({ name: "Choose file" });
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    if (file.name !== "Choose file") data.append("filedata", file);
    data.append("title", title);
    data.append("date", date);
    await createTask(data)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
        setError(error.response.data);
      });
  };
  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        {error ? <ErrorNotification description={error} /> : ""}
        <label>Task title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          name="title"
          required
        />
        <label>Date of completion</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          value={date}
          name="date"
          required
        />
        <div className="file-container">
          <img id="upload-image" src={fileIcon} alt="" />
          <input
            id="file-input"
            type="file"
            name="filedata"
            onChange={(e) => setfile(e.target.files[0])}
          />
          <label htmlFor="file-input">{file.name}</label>
        </div>
        <button className="form__btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
