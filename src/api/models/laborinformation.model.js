const mongoose = require("mongoose");

const LaborInformationSchema = new mongoose.Schema(
  {
    salary: { type: number, required:true},
    charge: {type: mongoose.Schema.Types.ObjectId, ref:"name"},
  },
  {
    timestamps: true,
  }
);

const LaborInformation = mongoose.model("laborInformation", LaborInformationSchema);

module.exports = LaborInformation;
