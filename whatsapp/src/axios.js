import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://quiet-mesa-25509.herokuapp.com"
});
export default instance;