const express = require("express");
const router = express.Router();

// untuk data user pasien
const {
    getAllPasien,
    getPasienByID,
    addPasien,
    deletePasienByID,
    updatePasienByID,
  } = require("../controller/pasien.controller");
  
  router.get("/allDataPasien", getAllPasien);
  router.get("/:id", getPasienByID);
  router.post("/addPasien", addPasien);
  router.delete("/:id", deletePasienByID);
  router.put("/:id", updatePasienByID);

module.exports = router;