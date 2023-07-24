const { Client } = require("../../models");
const { ErrorHandler } = require("../../utils/errorHandler");

const addClient = async (req, res, next) => {
  try {
    const { name_client, id_dep_client } = req.body;
    const find = await Client.find({ id_dep_client });

    if (find) {
      throw new ErrorHandler(409, "Taкий id_dep_client вже є");
    }
    const client = await Client.create({ ...req.body });
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

module.exports = addClient;
