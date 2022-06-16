const express = require("express");
const taskControllers = require("../controllers/task.controllers");
const router = express.Router();
const uploadMiddleware = require("../middlewares/upload.middleware");
const authenticateMiddleware = require("../middlewares/authenticate.middleware");
router.get("/", authenticateMiddleware, taskControllers.filterByStatus);
router.get("/:id/", authenticateMiddleware, taskControllers.getTaskById);
router.get("/:id/file/", authenticateMiddleware, taskControllers.downloadFile);
router.post(
  "/",
  authenticateMiddleware,
  uploadMiddleware.single("filedata"),
  taskControllers.createTask
);
router.put(
  "/:id/",
  authenticateMiddleware,
  uploadMiddleware.single("filedata"),
  taskControllers.updateTask
);
module.exports = router;
