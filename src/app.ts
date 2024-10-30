import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", taskRoutes);

export default app;
