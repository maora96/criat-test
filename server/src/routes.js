const express = require('express')
const router = express.Router()

// controllers
const Materials = require('./controllers/materials');

router.get('/materials', Materials.getAllMaterials);
router.get('/search/materials', Materials.searchMaterials);
router.get('/materials/:id', Materials.getMaterialById);
router.post('/materials', Materials.addMaterial);
router.patch('/materials/:id', Materials.updateMaterialById);
router.delete('/materials/:id', Materials.deleteMaterialById)


module.exports = router;
