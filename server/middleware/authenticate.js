const jwt = require('jsonwebtoken');
const User = require('./../models/userSchema');

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    //verify token
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    // find user token and match user id
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      'tokens.token': token,
    });
    // agar user not found then throw error
    if (!rootUser) {
      throw new error('user not found');
    }

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;

    next();
  } catch (err) {
    res.status(401).send('unauthorized: no token provided');
    console.log(err);
  }
};
module.exports = authenticate;
