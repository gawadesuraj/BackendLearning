import { Router } from "express";
import * as controller from "./auth.controller.js"
import ResisterDto from "./dto/register.dto";
import validate from "../../common/middleware/validate.middleware.js"

const router = Router();

router.post("/resister", validate(ResisterDto), controller.resister)


export default router;