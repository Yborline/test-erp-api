const validation = (schema) => {
  return (req, res, next) => {
    const validationResault = schema.validate(req.body);
    if (validationResault.error) {
      res.status(400).json({
        status: validationResault.error.details,
        code: 400,
        message: "missing required name field",
      });
    }
    next();
  };
};

module.exports = { validation };
