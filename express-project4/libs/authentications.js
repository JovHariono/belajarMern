const jwt = require("jsonwebtoken");
const { User } = require("../modules/users/models");
const { LibHTTPResponseException } = require("./https");

const LibsAuthenticationsMakeJWT = (payload) => {
  return jwt.sign(payload, process.env.APP_KEY, {
    expiresIn: process.env.APP_ACCESS_TOKEN_LIFETIME,
  });
};

const LibsAuthenticationsMiddleware = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      throw { status: 401, message: "token dibutuhkan untuk otentikasi" }
    }

    token = token.split(" ")[1]

    const result = jwt.verify(token, process.env.APP_KEY);

    if (!result) {
      return res.status(401).json({ message: "Token tidak valid" });
    }

    req.user = await User.findOne({ _id: result.id });

    return next();
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
};

module.exports = { LibsAuthenticationsMakeJWT, LibsAuthenticationsMiddleware };
