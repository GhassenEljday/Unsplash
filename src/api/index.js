import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: { authorization: `Bearer ${localStorage.getItem("token") || ""}` },
});

export default instance;
