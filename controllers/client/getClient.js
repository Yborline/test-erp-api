const { Client } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const getOneClient = async (req, res, next) => {
  try {
    let id_dep_client;
    const clients = await Client.find({}).sort({ id_dep_client });
    if (clients) {
      res.json({
        status: "success",
        code: 200,
        clients,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.StatusCode || 500, error.message));
  }
};

module.exports = getOneClient;
