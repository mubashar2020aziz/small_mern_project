const jwt = require('jsonwebtoken');
const router = require('express').Router();
const bodyParser = require('body-parser');
const User = require('./../models/userSchema');
require('../database/connect');
const bcrypt = require('bcrypt');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  return res.status(200).json({
    status: true,
    message: 'Hello world',
  });
});
// usr promise method
// router.post('/register', (req, res) => {
//     //usr fill properly or not
//   const { username, email, phone, work, password, cpassword } = req.body;
//   if (!username || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({
//       status: false,
//       message: 'plz complete fill the form',
//     });
//   }

//   //   use model User
//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({
//         status: false,
//         message: 'email already exist',
//       });
//     }
//     const user = new User({
//       username,
//       email,
//       phone,
//       work,
//       password,
//       cpassword,
//     });
//     user
//       .save()
//       .then(() => {
//         return res.status(201).json({
//           status: true,
//           message: 'user register successfull',
//         });
//       })
//       .catch((error) => {
//         return res.status(500).json({
//           status: error,
//           message: 'user register unsuccessfull',
//         });
//       });
//   }).catch;
// });

//user async method

router.post('/register', async (req, res) => {
  //user fill properly form
  const { username, email, phone, work, password, cpassword } = req.body;
  if (!username || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      status: false,
      message: 'fill form properly',
    });
  }

  //user already exist or not and use (User)
  try {
    let token;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({
        status: false,
        message: 'user email already exist',
      });
    }
    //now enter new user
    const user = new User({
      username,
      email,
      phone,
      work,
      password,
      cpassword,
    });

    const userRegister = await user.save();
    if (userRegister) {
      return res.status(201).json({
        return: true,
        message: 'user register successfull',
      });
    } else {
      return res.status(422).json({
        status: false,
        message: 'user register unsuccessfull',
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// login route
router.post('/login', async (req, res) => {
  try {
    //fill login form
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        status: false,
        message: 'plz fill the form',
      });
    }
    //find user email is same or not with register
    const userLogin = await User.findOne({ email: email });
    //compare password
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        return res.status(400).json({
          status: false,
          message: 'user not match password',
        });
      } else {
        return res.status(200).json({
          status: true,
          message: 'user successfull login',
        });
      }
    } else {
      return res.status(400).json({
        status: false,
        message: 'invalid credantials',
      });
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
