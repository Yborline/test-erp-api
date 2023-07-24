const { Project } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const getProject = async (req, res, next) => {
  try {
    const projects = await Project.find({});
    if (projects) {
      res.json({
        status: "success",
        code: 200,
        projects,
      });
    }
  } catch (error) {
    next(new ErrorHandler(error.StatusCode || 500, error.message));
  }
};

module.exports = getProject;
