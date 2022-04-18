import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";

import {
  renderTask,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller";

const router = Router();

router.get("/", renderTask);

router.post("/tasks/add", createTask);

router.get("/tasks/:id/toggleDone", toggleTask);

router.get("/tasks/:id/edit", renderTaskEdit);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
