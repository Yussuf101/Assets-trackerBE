
const express = require("express");
const cors = require("cors");

const {saveAllLocations, deleteAllLocations, findAllLocationTest,findAllLocations} = require("../Controllers/locations")
const {saveAllCableConnectors, saveAllComuters,saveAllMonitors,saveAllNetworkEquipments,
saveAllPeripherals, deleteAllCableConnector,deleteAllComputers,deleteAllMonitors,deleteAllNetworkEquipments,
deleteAllPerpherals, findAllAssetsTest, findAllCableConnectors, findAllComputers, findAllMonitors,
findAllNetworkEquipments, findAllPerperals} = require("../Controllers/AssetsController")
const router = express.Router();
const adminRouter = router;


adminRouter.get("/", async (req, res) => {
  // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
  try { 
    const cable_connectors = await findAllCableConnectors(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
    return res.status(200).json(cable_connectors);
  } catch (error) {
    res.status(500).json({msg: `${error}`});
  }

});
adminRouter.get("/", async (req, res) => {
    // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
    try { 
      const monitors = await findAllMonitors(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
      return res.status(200).json(monitors);
    } catch (error) {
      res.status(500).json({msg: `${error}`});
    }
  
  });
  adminRouter.get("/", async (req, res) => {
    // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
    try { 
      const network_equipments = await findAllNetworkEquipments(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
      return res.status(200).json(network_equipments);
    } catch (error) {
      res.status(500).json({msg: `${error}`});
    }
  
  });
  adminRouter.get("/", async (req, res) => {
    // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
    try { 
      const peripherals = await findAllPerperals(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
      return res.status(200).json(peripherals);
    } catch (error) {
      res.status(500).json({msg: `${error}`});
    }
  
  });
  adminRouter.get("/", async (req, res) => {
    // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
    try { 
      const computers = await findAllComputers(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
      return res.status(200).json(computers);
    } catch (error) {
      res.status(500).json({msg: `${error}`});
    }
  
  });
  adminRouter.get("/", async (req, res) => {
    // parseInt(req.query.limit) || 6, parseInt(req.query.offset) || 1
    try { 
      const locations = await findAllLocations(parseInt(req.query.limit, 10) || 6, parseInt(req.query.offset, 10) || 0, req.query.cat);
      return res.status(200).json(locations);
    } catch (error) {
      res.status(500).json({msg: `${error}`});
    }
  
  });

  adminRouter.get("/test/", async (req, res) => {
  const  computers= await findAllComputers();
  res.status(201).send(computers);
});

//post route to get
adminRouter.post("/", async (req, res) => {
  try {
    await saveAllCableConnectors(req.body);
    res.status(201).json({ msg: `Added ${req.body.length} Cable Connectors` });
  } catch (error) {
    res.status(500).json({ msg: `${error}` });
  }
});

adminRouter.post("/", async (req, res) => {
    try {
      await saveAllComuters(req.body);
      res.status(201).json({ msg: `Added ${req.body.length} Computers` });
    } catch (error) {
      res.status(500).json({ msg: `${error}` });
    }
  });

  adminRouter.post("/", async (req, res) => {
    try {
      await saveAllMonitors(req.body);
      res.status(201).json({ msg: `Added ${req.body.length} Monitors` });
    } catch (error) {
      res.status(500).json({ msg: `${error}` });
    }
  });

  adminRouter.post("/", async (req, res) => {
    try {
      await saveAllNetworkEquipments(req.body);
      res.status(201).json({ msg: `Added ${req.body.length} Network Equipments` });
    } catch (error) {
      res.status(500).json({ msg: `${error}` });
    }
  });

  adminRouter.post("/", async (req, res) => {
    try {
      await saveAllPeripherals(req.body);
      res.status(201).json({ msg: `Added ${req.body.length} Periphersls` });
    } catch (error) {
      res.status(500).json({ msg: `${error}` });
    }
  });

  adminRouter.post("/", async (req, res) => {
    try {
      await saveAllLocations(req.body);
      res.status(201).json({ msg: `Added ${req.body.length} Locations` });
    } catch (error) {
      res.status(500).json({ msg: `${error}` });
    }
  });








  adminRouter.delete("/", async (req, res) => {
  try {
    const results = await deleteAllCableConnector();
    res.status(200).json({ msg: `deleted ${results} cable connector` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Asset do not exist", error });
  }
});

adminRouter.delete("/", async (req, res) => {
    try {
      const results = await deleteAllComputers();
      res.status(200).json({ msg: `deleted ${results} Compter` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Asset do not exist", error });
    }
  });

  adminRouter.delete("/", async (req, res) => {
    try {
      const results = await deleteAllMonitors();
      res.status(200).json({ msg: `deleted ${results} Monitor` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Asset do not exist", error });
    }
  });

  adminRouter.delete("/", async (req, res) => {
    try {
      const results = await deleteAllNetworkEquipments();
      res.status(200).json({ msg: `deleted ${results} Network Equipment` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Asset do not exist", error });
    }
  });

  adminRouter.delete("/", async (req, res) => {
    try {
      const results = await deleteAllPerpherals();
      res.status(200).json({ msg: `deleted ${results} peripheral` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Asset do not exist", error });
    }
  });

  adminRouter.delete("/", async (req, res) => {
    try {
      const results = await deleteAllLocations();
      res.status(200).json({ msg: `deleted ${results} Location` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Location do not exist", error });
    }
  });



module.exports = adminRouter;