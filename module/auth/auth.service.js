
import ApiError from "../../common/utils/api-error";
import { generateResetToken } from "../../common/utils/jwt.utils";
import User from "./auth.model"

const register = async ({name, email, password, role}) => {
    const existing = await User.findOne(email);
    if(existing){
        throw ApiError.conflict("Email Already Exists");
    }
    
    const {rawToken, hashdToken} = generateResetToken();
    const user = await User.create({
        name, 
        email,
        password,
        role,
        varificationToken : hashdToken
    })

    //TODO : send an email to user with token : rawToken
    const userObj = user.toObject()
    delete userObj.password,
    delete userObj.varificationToken


    return userObj;
}

export {register};