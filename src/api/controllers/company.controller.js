//Importamos el modelo
const Company = require("../models/company.model");

const getCompanys = async (req, res, next) => {
  try {
    const companys = await Company.find();
    return res.status(200).json(companys);
  } catch (error) {
    return res.status(404).json("Companys not found", error);
  }
};

const getCompanyByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);
    return res.status(200).json(company);
  } catch (error) {
    return res.status(404).json("Company not found", error);
  }
};

const getCompanyByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const company = await Company.findOne({ name: name });
    return res.status(200).json(company);
  } catch (error) {
    return res.status(404).json("Company not found", error);
  }
};

const createCompany = async (req, res, next) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    return res.status(201).json(newCompany);
  } catch (error) {
    return res.status(500).json("Failed creating Company", error);
  }
};

const deleteCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Company.findByIdAndDelete(id);
    return res.status(200).json("Company deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting company");
  }
};

const updateCompany = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCompany = new Company(req.body);
    newCompany._id = id;
    await Company.findByIdAndUpdate(id, newCompany);
    return res.status(200).json("Edited company");
  } catch (error) {
    return res.status(500).json("Failed editing company", error);
  }
};

module.exports = {
  getCompanys,
  getCompanyByID,
  getCompanyByName,
  deleteCompany,
  createCompany,
  updateCompany,
};
