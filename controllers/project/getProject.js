const { Project } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const getClient = async (req, res, next) => {
  try {
    const clients = await Project.find({});
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

module.exports = getClient;
