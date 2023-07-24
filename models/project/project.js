const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const projectSchema = Schema(
  {
    id: {
      type: Number,
      required: [true, "id is required here"],
    },
    id_dep_client: {
      type: String,
      required: [true, "Set name for client"],
      minlength: 2,
      maxlength: 50,
    },
    id_project: {
      type: String,
      required: [true, "Set department id for client"],
    },
  },
  { versionKey: false, timestamps: true }
);

const projectJoiSchema = Joi.object({
  id: Joi.number().required,
  id_dep_client: Joi.string().required(),
  id_project: Joi.string().required(),
});

const Project = model("project", projectSchema);

module.exports = { Project, projectJoiSchema };
