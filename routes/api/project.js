const express = require("express");
const router = express.Router();
const { validation, ctrlWrapper } = require("../../middlewares");
const { project: ctrl } = require("../../controllers");
const { projectJoiSchema } = require("../../models/project");
const validationMiddleware = validation(projectJoiSchema);

router.get("/", ctrlWrapper(ctrl.getProject));
router.post("/", validationMiddleware, ctrlWrapper(ctrl.addProject));

module.exports = router;
