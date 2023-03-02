const locations = require("../models/locations")



const saveAllLocations = async (where = {catagory: computer}) => await locations.bulkCreate(array);

const deleteAllLocations = async () => await locations.destroy({ where: {} });

const findAllLocations = async (limit = 6, offset = 0, cat="", where = {}) => await locations.findAndCountAll({limit, offset, where: {catagory: cat}});

const findAllLocationTest = async () => await computers.findAll({where: {Location_name: "Manchester"}});



module.exports = {
  saveAllLocations,
  deleteAllLocations,
  findAllLocations,
  findAllLocationTest
};