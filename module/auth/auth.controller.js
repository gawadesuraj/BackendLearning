import * as authSevice from "./auth.service.js"
import ApiResponse from "../../common/utils/api-response.js"

const resister = async (req, res) => {
  const user = await authSevice.register(req.body);
  ApiResponse.created(res, "Registration Success", user);
};

export { resister };
