import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();


const addMaterial = async (req, res) => {
    const {description} = req.body;

    const material = await prisma.materials.create({
        data: {
            description: description
        }
    })

    res.json(material)
}

const getAllMaterials = async (req, res) => {
    const materials = await prisma.materials.findMany();
    res.json(materials);
}

const getMaterialById = async (req, res) => {
    const { id } = req.params.id; 

    const material = await prisma.materials.findUnique({
        where: {
            id: id
        }
    })

    res.json(material)
}

const deleteMaterialById = async (req, res) => {
    const { id } = req.params.id; 

    const deletedMaterial = await prisma.materials.delete({
        where: {
            id: id
        }
    })

    res.json(deletedMaterial)
}

const updateMaterialById = async (req, res) => {
    const { id } = req.params.id; 
    const {description} = req.body;

    const updatedMaterial = await prisma.materials.update({
        where: {id: id},
        data: {
            description: description
        }
    })

    res.json(updatedMaterial)
}

const searchMaterials = async (req, res) => {
    const {search} = req.query.search; 

    const materials = await prisma.materials.findMany({
        where: {
          description: {
            contains: search,
          },
        },
      })

      res.json(materials)
}

module.exports = {
    addMaterial,
    getAllMaterials,
    getMaterialById,
    deleteMaterialById,
    updateMaterialById,
    searchMaterials
}