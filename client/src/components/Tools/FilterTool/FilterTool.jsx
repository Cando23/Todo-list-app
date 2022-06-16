import React, { useState } from "react";
import "./FilterTool.css";
import { useDispatch } from "react-redux";
import { filterByStatus } from "../../../utils/API";
export default function FilterTool(props) {
  const [activeStatus, setactiveStatus] = useState(props.info.activeStatus);
  const dispatch = useDispatch();
  const setCurrentStatus = (e) => setactiveStatus(e.target.value);
  const onClick = async () => {
      await filterByStatus(activeStatus)
      .then((res) => {
        dispatch({ type: "FILTER_LIST", payload: res.data });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="filter-container">
      <select
        className="filter-container__select"
        name="taskStatus"
        defaultValue={activeStatus}
        onChange={setCurrentStatus}
      >
        {props.info.statuses.map((status, i) => {
          return (
            <option value={status} key={i}>
              {status}
            </option>
          );
        })}
      </select>
      <button
        type="submit"
        className="filter-container__btn"
        onClick={onClick}
      >
        Filter
      </button>
    </div>
  );
}
