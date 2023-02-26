var DataTypes = require("sequelize").DataTypes;
var _Cable_connectors = require("./Cable_connectors");
var _Computers = require("./Computers");
var _Users = require("./Users");
var _Locations = require("./lications");
var _monitors = require("./monitors");
var _Network_equipments = require("./network_equipment");
var _Peripherals = require("./peripherals");


function initModels(sequelize) {
  var Cable_connectors = _Cable_connectors(sequelize, DataTypes);
  var Computers = _Computers(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);
  var Locations = _Locations = require("./lications");
  var monitors = _monitors = require("./monitors");
  var Network_equipments = _Network_equipments = require("./network_equipment");
  var Peripherals = _Peripherals = require("./peripherals");


  return {
    Cable_connectors,
    Computers,
    Users,
    Locations,
    monitors,
    Network_equipments,
    Peripherals
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
