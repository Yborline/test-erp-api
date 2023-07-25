const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const clientSchema = Schema(
  {
    name_client: {
      type: String,
      required: [true, "Set name for client"],
      minlength: 2,
      maxlength: 50,
    },
    id_dep_client: {
      type: String,
      required: [true, "Set department id for client"],
      maxlength: 5,
    },
  },
  { versionKey: false, timestamps: true }
);

const clientJoiSchema = Joi.object({
  name_client: Joi.string().required(),
  id_dep_client: Joi.string().required(),
});

const Client = model("client", clientSchema);

module.exports = { Client, clientJoiSchema };
