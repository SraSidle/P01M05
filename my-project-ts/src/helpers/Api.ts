import axios from "axios";

const urls = {
  // development: "http://localhost:3000",
  development: "https://apirest-todolist-jsonserver.herokuapp.com",
  production: "https://apirest-todolist-jsonserver.herokuapp.com",
}

export const Api = axios.create({baseURL : urls.development});
