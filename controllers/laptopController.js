const Model = require('../models/laptopModel');

exports.getAll = (req, res) => {
  res.status(200).json(Model.getAll());
};

exports.getById = (req, res) => {
  const item = Model.getById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Data tidak ditemukan' });
  res.status(200).json(item);
};

exports.create = (req, res) => {
  const { merk, harga } = req.body;
  if (!merk || !harga) {
    return res.status(400).json({ message: 'Field merk dan harga wajib diisi' });
  }
  const dataBaru = Model.create({ merk, harga });
  res.status(201).json(dataBaru);
};

exports.update = (req, res) => {
  const updated = Model.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: 'Data tidak ditemukan' });
  res.status(200).json(updated);
};

exports.delete = (req, res) => {
  const deleted = Model.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Data tidak ditemukan' });
  res.status(204).send();
};