const mongoose = require("mongoose");

const ChargeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      enum: ["admin", "director", "operator"],
    },
  },
  {
    timestamps: true,
  }
);

const Charge = mongoose.model("charge", ChargeSchema);

module.exports = Charge;
