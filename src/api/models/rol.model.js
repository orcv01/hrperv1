const mongoose = require("mongoose");

const RolSchema = new mongoose.Schema(
  {
    name: { type:string, required: true, enum["admin", "usuary"]},
  },
  {
    timestamps: true,
  }
);

const Rol = mongoose.model("rol", RolSchema);

module.exports = Rol;
