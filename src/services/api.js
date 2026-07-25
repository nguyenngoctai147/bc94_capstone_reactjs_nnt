import axios from "axios";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});

// const accessToken = localStorage.getItem("USERADMIN")
//   ? JSON.parse(localStorage.getItem("USERADMIN")).accessToken
//   : "";

api.interceptors.request.use((config) => {
  config.headers = {
    // Authorization: `Bearer ${accessToken}`,
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA5NCIsIkhldEhhblN0cmluZyI6IjEzLzAxLzIwMjciLCJIZXRIYW5UaW1lIjoiMTc5OTc5ODQwMDAwMCIsIm5iZiI6MTc3MjY0MzYwMCwiZXhwIjoxNzk5OTQ2MDAwfQ.fXnFWdTzELVYga9S7pakEljJsvLiA3qz1XvvVCzlxkI",
  };

  return { ...config };
});

export default api;
