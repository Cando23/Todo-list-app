import React from "react";
import "./ErrorNotification.css";
export default function ErrorNotification(error) {
  return <div className="error">{error.description}</div>;
}
