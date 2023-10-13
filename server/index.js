import express from "express";
import router from "./routes/routes";

const app = express();
app.use("/", router);
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server up and running in port => 8000");
});
