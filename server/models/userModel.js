const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
  userfname: {
    type: String,
  },
  userid: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
