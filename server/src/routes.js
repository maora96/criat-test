const express = require('express')
const router = express.Router()

const multer = require('./middlewares/multer')

// controllers
const Materials = require('./controllers/materials');

router.get('/materials', Materials.getAllMaterials);
router.get('/materials/:id', Materials.getMaterialById);
router.post('/materials', multer.upload.single('file'), Materials.addMaterial);
router.put('/materials/:id', Materials.updateMaterialById);
router.put('/materials/thumb/:id', multer.upload.single('file'), Materials.updateMaterialThumbById);
router.delete('/materials/:id', Materials.deleteMaterialById)


module.exports = router;
