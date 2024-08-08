const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  fullName: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
