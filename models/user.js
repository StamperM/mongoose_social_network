const { Schema, model,Types} = require("mongoose");
const validator = require("validator");
const thought = require('./Thoughts')

// create user model
const userSchema = new Schema({
  username: { type: String, trim: true, unique: true, required: true },
  email: {
    type: String,
    validate: {
      validator: validator.isEmail,
      message: `{VALUE} is not valid. Please provide a valid email.`,
      isAsync: false,
    },
    unique: true,
    require: true,
  },

  thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],

  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User= model("User", userSchema);

module.exports = User;
