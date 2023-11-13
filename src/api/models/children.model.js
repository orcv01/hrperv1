const mongoose = require("mongoose");

const ChildrenSchema = new mongoose.Schema(
  {
    guys: { type :number, required: true, enum:[0,1,2,3,4] },
    girls: {trype: number, required: true, enum:[0,1,2,3,4]},
  },
  {
    timestamps: true,
  }
);

const Children = mongoose.model("children", ChildrenSchema);

module.exports = Children;
