const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    messages: [
      {
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        number: {
          type: Number,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
      },
    ],
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

// hash the password

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//generate web token

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

// store the message
userSchema.methods.addMessage = async function (name, email, number, message) {
  try {
    // use schema messages
    this.messages = this.messages.concat({ name, email, number, message });
    await this.save();
    return this.messages;
  } catch (err) {
    console.log(err);
  }
};

//model
mongoose.model('USER', userSchema);
// module exports
module.exports = mongoose.model('USER');
