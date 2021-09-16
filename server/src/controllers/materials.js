const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();



const addMaterial = async (req, res) => {
    console.log(req.file)
    
    const {name, description, brand, isActive} = req.body;
    const {file} = req;

    let active = (isActive === "true")

    const material = await prisma.materials.create({
      data: {
            description: description,
            name: name, 
            brand: brand, 
            isActive: active,
            thumb: file.filename
        }
    })

    res.json(material)
}

const getAllMaterials = async (req, res) => {
    const materials = await prisma.materials.findMany();
    res.json(materials);
}

const getMaterialById = async (req, res) => {
    console.log("GETTING MATERIAL BY ID")
    const { id } = req.params; 
    const material = await prisma.materials.findUnique({
        where: {
          id: Number(id),
        },
      })

    res.json(material)
}

const deleteMaterialById = async (req, res) => {
    const { id } = req.params; 

    const deletedMaterial = await prisma.materials.delete({
        where: {
            id: Number(id)
        }
    })

    res.json(deletedMaterial)
}

const updateMaterialById = async (req, res) => {
    const { id } = req.params; 
    console.log("body",req.body)
    const {name, description, brand, isActive} = req.body;

    let active = (isActive === "true")
    console.log(name, description, brand, active)
    const updatedMaterial = await prisma.materials.update({
        where: {id: Number(id)},
        data: {
            description: description,
            name: name, 
            brand: brand, 
            isActive: active,
        }
    })

    res.json(updatedMaterial)
}

const updateMaterialThumbById = async (req, res) => {
    const { id } = req.params; 
    const {file} = req;
    console.log(file)

    const updatedMaterial = await prisma.materials.update({
        where: {id: Number(id)},
        data: {
            thumb: file.filename
        }
    })

    res.json(updatedMaterial)
}


module.exports = {
    addMaterial,
    getAllMaterials,
    getMaterialById,
    deleteMaterialById,
    updateMaterialById,
    updateMaterialThumbById
}