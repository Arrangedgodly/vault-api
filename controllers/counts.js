const Count = require('../models/count');

const createCount = (req, res) => {
  const { store, count } = req.body;

  Count.create({ store, count })
    .then((countData) => res.status(200).send(countData))
    .catch((err) => res.status(500).send({ message: `Error: ${err.name} - ${err.message}` }));
};

const getCounts = (req, res) => {
  Count.find({})
    .then((counts) => res.status(200).send(counts))
    .catch((err) => res.status(500).send({ message: `Error: ${err.name} - ${err.message}` }));
};

const getStoreCounts = (req, res) => {
  const { store } = req.headers;

  Count.find({ store })
    .then((counts) => res.status(200).send(counts))
    .catch((err) => res.status(500).send({ message: `Error: ${err.name} - ${err.message}` }));
};

const deleteCount = (req, res) => {
  const { _id } = req.body;

  Count.findByIdAndRemove({ _id })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send({ message: `Error: ${err.name} - ${err.message}` }));
};

const patchCount = (req, res) => {
  const { _id, count } = req.body;

  Count.findByIdAndUpdate({ _id }, { count }, {
    new: true,
  })
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(500).send({ message: `Error: ${err.name} - ${err.message}` }));
};

module.exports = {
  createCount,
  getCounts,
  getStoreCounts,
  deleteCount,
  patchCount,
};
