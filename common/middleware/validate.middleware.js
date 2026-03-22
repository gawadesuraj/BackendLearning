import ApiError from "../utils/api-error";
const validate = (Dtoclass) => {
  return (req, res, next) => {
    const { error, value } = Dtoclass.validate(req.body);
    if (error) {
      throw new ApiError.badRequest();
    }
    req.body = value;
    next();
  };
};

export default validate;
