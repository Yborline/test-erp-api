const { Project, Client } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const addProject = async (req, res, next) => {
  try {
    const countProject = await Project.countDocuments({});
    let id = 1;
    if (countProject) {
      const projectLast = await Project.find().sort({ id: -1 }).limit(1);

      id = projectLast[0].id + 1;
    }

    const project = await Project.create({ ...req.body, id: id });
    res.json({
      status: "success",
      code: 201,
      project,
    });
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error.status || 500, error.message));
  }
};

module.exports = addProject;
