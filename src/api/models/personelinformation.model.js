const mongoose = require("mongoose");

const PersonelInformationSchema = new mongoose.Schema(
  {
    children: { type: mongoose.Schema.Types.ObjectId, ref:"children"},
    maritalStatus: {type: mongoose.Schema.Types.ObjectId, ref:"maritalStatus"},
  },
  {
    timestamps: true,
  }
);

const PersonelInformation = mongoose.model("personelInformation", PersonelInformationSchema);

module.exports = PersonelInformation;
