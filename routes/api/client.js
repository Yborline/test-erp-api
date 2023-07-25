const express = require("express");
const router = express.Router();
const { validation, ctrlWrapper } = require("../../middlewares");
const { clients: ctrl } = require("../../controllers");
const { clientJoiSchema } = require("../../models/client");
const validationMiddleware = validation(clientJoiSchema);

router.get("/", ctrlWrapper(ctrl.getClient));
router.post("/", validationMiddleware, ctrlWrapper(ctrl.addClient));
router.get("/:id_dep_client", ctrlWrapper(ctrl.getClientByDep));

module.exports = router;
