import axios from "axios";
import sha512 from "js-sha512";
const API = axios.create({
  baseURL: "http://localhost:8000/api/",
  responseType: "json",
  withCredentials: true,
});
export const filterByStatus = (status) => {
  return API.get("tasks/", {
    params: {
      status: status,
    },
  });
};

export const createTask = (data) => {
  return API.post("tasks/", data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
export const updateTask = (id, data) => {
  return API.put(`tasks/${id}/`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
};
export const getTaskById = (id) => {
  return API.get(`tasks/${id}/`);
};
export const downloadFile = async (id, name) => {
  await API({
    url: `tasks/${id}/file/`,
    method: "GET",
    responseType: "blob",
  })
    .then((response) => {
      const blob = new Blob([response.data]);
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => console.log(error));
};

export const authorize = (userInfo) => {
  if (userInfo.password) userInfo.password = sha512(userInfo.password);
  return API.post("users/login/", userInfo, {
    headers: {
      "content-type": "application/json",
    },
  });
};
export const register = (userInfo) => {
  if (userInfo.password) userInfo.password = sha512(userInfo.password);
  return API.post("users/register/", userInfo, {
    headers: {
      "content-type": "application/json",
    },
  });
};
export const logout = () => {
  return API.get("users/logout/");
};
