const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    lastname: { type: String, required: true, trim: true },
    nif: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    birthdate: { type: Date, required: true },
    datehight: { type: Date, required: true },
    enddate: { type: Date },
    personelInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personelInformation",
    },
    laborInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personelInformation",
    },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: "employee" },
  },
  {
    timestamps: true,
  }
);

const Employee = mongoose.model("employee", EmployeeSchema);

module.exports = Employee;
