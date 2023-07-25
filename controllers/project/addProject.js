const { Project, Client } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const addProject = async (req, res, next) => {
  try {
    const { id_dep_client } = req.body;
    const countProject = await Project.find({
      id_dep_client,
    }).countDocuments({});
    let id = 1;
    if (countProject) {
      const projectLast = await Project.find({ id_dep_client })
        .sort({ id: -1 })
        .limit(1);

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
