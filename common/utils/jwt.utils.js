import crypto from "crypto";

//token is just long string

const generateResetToken = () => {

    const rawToken= crypto.randomBytes(32).toString("hex")
    const hashdToken = crypto.createHash("sha256")
    .update(rawToken)
    .digest("hex")
    return {rawToken, hashdToken};
}

export {
    generateResetToken
}