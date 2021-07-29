const mongoose = require("mongoose");

const SideTypeSchema = new mongoose.Schema(
  {
    name: String,
    restaurant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

const SideTypeModel = mongoose.model("SideType", SideTypeSchema);
module.exports = { SideTypeModel, SideTypeSchema };
