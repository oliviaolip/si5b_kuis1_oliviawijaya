const laptopModel = require('../models/laptopModel');

const laptopController = {
  getAll: (req, res) => {
    const laptops = laptopModel.getAll();
    res.status(200).json(laptops);
  },

  getById: (req, res) => {
    const { id } = req.params;
    const laptop = laptopModel.getById(id);
    if (!laptop) {
      return res.status(404).json({ message: `Laptop dengan ID ${id} tidak ditemukan` });
    }
    res.status(200).json(laptop);
  },

  create: (req, res) => {
    const { merk, harga } = req.body;
    if (!merk || !harga) {
      return res.status(400).json({ message: 'Merk dan harga wajib diisi' });
    }
    const laptopBaru = laptopModel.create(req.body);
    res.status(201).json(laptopBaru);
  },

  update: (req, res) => {
    const { id } = req.params;
    const laptopDiupdate = laptopModel.update(id, req.body);
    if (!laptopDiupdate) {
      return res.status(404).json({ message: `Laptop dengan ID ${id} tidak ditemukan` });
    }
    res.status(200).json(laptopDiupdate);
  },

  delete: (req, res) => {
    const { id } = req.params;
    const berhasil = laptopModel.delete(id);
    if (!berhasil) {
      return res.status(404).json({ message: `Laptop dengan ID ${id} tidak ditemukan` });
    }
    res.status(200).json({ message: `Laptop dengan ID ${id} berhasil dihapus` });
  }
};

module.exports = laptopController;