const { Project } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const getProject = async (req, res, next) => {
  try {
    const { name_client, id_dep_client } = req.body;
    const find = await Project.findOne({ id_dep_client });

    const countProject = await Project.countDocuments({});
    let id = 1;
    if (countProject) {
      id = countProject + 1;
    }

    if (find) {
      throw new ErrorHandler(409, "Taкий id_dep_client вже є");
    }
    const client = await Project.create({ ...req.body, id: id });
    res.json({
      status: "success",
      code: 201,
      client,
    });
  } catch (error) {
    console.log(error);
    next(new ErrorHandler(error.status || 500, error.message));
  }
};

module.exports = getProject;
