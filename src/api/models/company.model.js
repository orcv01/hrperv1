const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    cif: { type: String, required: true, trim: true },
    name: { type: String, trim: true },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("company", CompanySchema);

module.exports = Company;
