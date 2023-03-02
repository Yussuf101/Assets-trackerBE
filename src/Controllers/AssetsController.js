const Cable_Connectors = require("../models/cable_connectors");
const computers = require("../models/computers");
const Monitors = require("../models/monitors");
const network_equipments = require("../models/network_equipments");
const peripherals = require("../models/peripherals")





const saveAllCableConnectors = async (where = {catagory: Cable_Connector}) => await Cable_Connectors.bulkCreate(array);
const saveAllComuters = async (where = {catagory: computer}) => await computers.bulkCreate(array);
const saveAllMonitors = async (where = {catagory: monitor}) => await Monitors.bulkCreate(array);
const saveAllNetworkEquipments = async (where = {catagory : network_equipment}) => await network_equipments.bulkCreate(array);
const saveAllPeripherals = async (where = {catagory: peripheral}) => await peripherals.bulkCreate(array);

const deleteAllCableConnector = async () => await Cable_Connectors.destroy({ where: {} });
const deleteAllComputers = async () => await computers.destroy({ where: {} });
const deleteAllMonitors = async () => await Monitors.destroy({ where: {} });
const deleteAllNetworkEquipments = async () => await network_equipments.destroy({ where: {} });
const deleteAllPerpherals = async () => await peripherals.destroy({ where: {} });

const findAllCableConnectors = async (limit = 6, offset = 0, cat="", where = {}) => await Cable_Connectors.findAndCountAll({limit, offset, where: {catagory: Cable_Connector}});
const findAllComputers = async (limit = 6, offset = 0, cat="", where = {}) => await computers.findAndCountAll({limit, offset, where: {catagory: computer}});
const findAllMonitors = async (limit = 6, offset = 0, cat="", where = {}) => await Monitors.findAndCountAll({limit, offset, where: {catagory: monitor}});
const findAllNetworkEquipments = async (limit = 6, offset = 0, cat="", where = {}) => await network_equipments.findAndCountAll({limit, offset, where: {catagory: network_equipment}});
const findAllPerperals = async (limit = 6, offset = 0, cat="", where = {}) => await peripherals.findAndCountAll({limit, offset, where: {catagory: peripheral}});

const findAllAssetsTest = async () => await computers.findAll({where: {model: "MacBook Pro"}});



module.exports = {
  saveAllCableConnectors,
  saveAllComuters,
  saveAllMonitors,
  saveAllNetworkEquipments,
  saveAllPeripherals,
  deleteAllCableConnector,
  deleteAllComputers,
  deleteAllMonitors,
  deleteAllNetworkEquipments,
  deleteAllPerpherals,
  findAllCableConnectors,
  findAllComputers,
  findAllMonitors,
  findAllNetworkEquipments,
  findAllPerperals,
  findAllAssetsTest
};