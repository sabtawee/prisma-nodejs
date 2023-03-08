const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getProduct = async (req, res) => {
  try {
    const response = await prisma.product.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const response = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  try {
    const response = await prisma.product.create({
      data: {
        name: name,
        price: price,
      },
    });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { name, price } = req.body;
  const { id } = req.params;
  try {
    const response = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        price: price,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await prisma.product.delete({
        where: {
            id: Number(id),
        },
        });
        res.status(200).json({ msg: "Product deleted successfully"});
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

module.exports = {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
