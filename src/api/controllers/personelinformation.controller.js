//Importamos el modelo
const PersonelInformation = require("../models/personelInformation.model");

const getPersonelInformations = async (req, res, next) => {
  try {
    const personelInformations = await PersonelInformation.find();
    return res.status(200).json(personelInformations);
  } catch (error) {
    return res.status(404).json("PersonelInformations not found", error);
  }
};

const getPersonelInformationByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const personelInformation = await PersonelInformation.findById(id);
    return res.status(200).json(personelInformation);
  } catch (error) {
    return res.status(404).json("PersonelInformation not found", error);
  }
};

const createPersonelInformation = async (req, res, next) => {
  try {
    const newPersonelInformation = new PersonelInformation(req.body);
    await newPersonelInformation.save();
    return res.status(201).json(newPersonelInformation);
  } catch (error) {
    return res.status(500).json("Failed creating PersonelInformation", error);
  }
};

const deletePersonelInformation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await PersonelInformation.findByIdAndDelete(id);
    return res.status(200).json("PersonelInformation deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting personelInformation");
  }
};

const updatePersonelInformation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newPersonelInformation = new PersonelInformation(req.body);
    newPersonelInformation._id = id;
    await PersonelInformation.findByIdAndUpdate(id, newPersonelInformation);
    return res.status(200).json("Edited personelInformation");
  } catch (error) {
    return res.status(500).json("Failed editing personelInformation", error);
  }
};

module.exports = {
  getPersonelInformations,
  getPersonelInformationByID,
  deletePersonelInformation,
  createPersonelInformation,
  updatePersonelInformation,
};
