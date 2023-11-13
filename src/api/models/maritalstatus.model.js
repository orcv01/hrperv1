const mongoose = require("mongoose");

const MaritalStatusSchema = new mongoose.Schema(
  {
    name: {type:String, required: true, trim: true, enum:["soltero","soltera","Casado","casada","divorciado","divorciada", "otros"]},
  },
  {
    timestamps: true,
  }
);

const MaritalStatus = mongoose.model("maritalStatus", MaritalStatusSchema);

module.exports = MaritalStatus;
