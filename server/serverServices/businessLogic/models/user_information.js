const mongoose = require("mongoose");

const UserInfoSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    hashed_pwd: {
      type: String,
      require: true,
    },
    role_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    dnumber: {
      type: String,
      require: true,
    },
    first_name: {
      type: String,
      require: true,
    },
    last_name: {
      type: String,
      require: true,
    },
    contacts: {
      address: {
        type: String,
        require: true,
      },
      phone: String,
      email: String,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    order_history: [],
    delivery_history: [],
  },
  { timestamps: true }
);
const UserInfoModel = mongoose.model("UserInfo", UserInfoSchema);

module.exports = { UserInfoModel, UserInfoSchema };
