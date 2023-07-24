const express = require("express");
const router = express.Router();
const { validation, ctrlWrapper } = require("../../middlewares");
const { clients: ctrl } = require("../../controllers");
const { clientJoiSchema } = require("../../models/client");
const validationMiddleware = validation(clientJoiSchema);

router.get("/", ctrlWrapper(ctrl.getClient));
router.post("/", validationMiddleware, ctrlWrapper(ctrl.addClient));

module.exports = router;
