const { Client } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const getClientByDep = async (req, res, next) => {
  try {
    const { id_dep_client } = req.body;
    const client = await Client.findOne({ id_dep_client });
    if (client) {
      res.json({
        status: "success",
        code: 200,
        client,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.StatusCode || 500, error.message));
  }
};

module.exports = getClientByDep;
