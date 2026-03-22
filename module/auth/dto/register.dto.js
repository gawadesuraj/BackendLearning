import Joi from "joi";
import BaseDto from "../../../common/dto/base.dto.js";

class ResisterDto extends BaseDto {
  static schema = Joi.object({
    name: Joi.string().trim().min(2).max(58).required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid("customer", "seller").default("customer"),
  });
}

export default ResisterDto;
