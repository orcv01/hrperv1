//Importamos el modelo
const Children = require("../models/children.model");

const getChildrens = async (req, res, next) => {
  try {
    const childrens = await Children.find();
    return res.status(200).json(childrens);
  } catch (error) {
    return res.status(404).json("Childrens not found", error);
  }
};

const getChildrenByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const children = await Children.findById(id);
    return res.status(200).json(children);
  } catch (error) {
    return res.status(404).json("Children not found", error);
  }
};

const createChildren = async (req, res, next) => {
  try {
    const newChildren = new Children(req.body);
    await newChildren.save();
    return res.status(201).json(newChildren);
  } catch (error) {
    return res.status(500).json("Failed creating Children", error);
  }
};

const deleteChildren = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Children.findByIdAndDelete(id);
    return res.status(200).json("Children deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting children");
  }
};

const updateChildren = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newChildren = new Children(req.body);
    newChildren._id = id;
    await Children.findByIdAndUpdate(id, newChildren);
    return res.status(200).json("Edited children");
  } catch (error) {
    return res.status(500).json("Failed editing children", error);
  }
};

module.exports = {
  getChildrens,
  getChildrenByID,
  deleteChildren,
  createChildren,
  updateChildren,
};
