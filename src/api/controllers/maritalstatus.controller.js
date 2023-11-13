//Importamos el modelo
const MaritalStatus = require("../models/maritalStatus.model");

const getMaritalStatuss = async (req, res, next) => {
  try {
    const maritalStatuss = await MaritalStatus.find();
    return res.status(200).json(maritalStatuss);
  } catch (error) {
    return res.status(404).json("MaritalStatuss not found", error);
  }
};

const getMaritalStatusByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const maritalStatus = await MaritalStatus.findById(id);
    return res.status(200).json(maritalStatus);
  } catch (error) {
    return res.status(404).json("MaritalStatus not found", error);
  }
};

const getMaritalStatusByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const maritalStatus = await MaritalStatus.findOne({ name: name });
    return res.status(200).json(maritalStatus);
  } catch (error) {
    return res.status(404).json("MaritalStatus not found", error);
  }
};

const createMaritalStatus = async (req, res, next) => {
  try {
    const newMaritalStatus = new MaritalStatus(req.body);
    await newMaritalStatus.save();
    return res.status(201).json(newMaritalStatus);
  } catch (error) {
    return res.status(500).json("Failed creating MaritalStatus", error);
  }
};

const deleteMaritalStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    await MaritalStatus.findByIdAndDelete(id);
    return res.status(200).json("MaritalStatus deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting maritalStatus");
  }
};

const updateMaritalStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newMaritalStatus = new MaritalStatus(req.body);
    newMaritalStatus._id = id;
    await MaritalStatus.findByIdAndUpdate(id, newMaritalStatus);
    return res.status(200).json("Edited maritalStatus");
  } catch (error) {
    return res.status(500).json("Failed editing maritalStatus", error);
  }
};

module.exports = {
  getMaritalStatuss,
  getMaritalStatusByID,
  getMaritalStatusByName,
  deleteMaritalStatus,
  createMaritalStatus,
  updateMaritalStatus,
};
