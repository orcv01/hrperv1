//Importamos el modelo
const Charge = require("../models/charge.model");

const getCharges = async (req, res, next) => {
  try {
    const charges = await Charge.find();
    return res.status(200).json(charges);
  } catch (error) {
    return res.status(404).json("Charges not found", error);
  }
};

const getChargeByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const charge = await Charge.findById(id);
    return res.status(200).json(charge);
  } catch (error) {
    return res.status(404).json("Charge not found", error);
  }
};

const getChargeByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const charge = await Charge.findOne({ name: name });
    return res.status(200).json(charge);
  } catch (error) {
    return res.status(404).json("Charge not found", error);
  }
};

const createCharge = async (req, res, next) => {
  try {
    const newCharge = new Charge(req.body);
    await newCharge.save();
    return res.status(201).json(newCharge);
  } catch (error) {
    return res.status(500).json("Failed creating Charge", error);
  }
};

const deleteCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Charge.findByIdAndDelete(id);
    return res.status(200).json("Charge deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting charge");
  }
};

const updateCharge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCharge = new Charge(req.body);
    newCharge._id = id;
    await Charge.findByIdAndUpdate(id, newCharge);
    return res.status(200).json("Edited charge");
  } catch (error) {
    return res.status(500).json("Failed editing charge", error);
  }
};

module.exports = {
  getCharges,
  getChargeByID,
  getChargeByName,
  deleteCharge,
  createCharge,
  updateCharge,
};
