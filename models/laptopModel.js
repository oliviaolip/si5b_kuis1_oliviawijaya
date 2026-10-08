let dataLaptop = [
  { id: 1, merk: "Asus", harga: 10000000 },
  { id: 2, merk: "Lenovo", harga: 12000000 }
];

const laptopModel = {
  getAll: () => {
    return dataLaptop;
  },

  getById: (id) => {
    const numericId = parseInt(id, 10);
    return dataLaptop.find((item) => item.id === numericId);
  },

  create: (dataBaru) => {
    const idBaru = dataLaptop.length > 0 ? Math.max(...dataLaptop.map((item) => item.id)) + 1 : 1;
    const laptopBaru = { id: idBaru, ...dataBaru };
    dataLaptop.push(laptopBaru);
    return laptopBaru;
  },

  update: (id, dataUpdate) => {
    const numericId = parseInt(id, 10);
    const index = dataLaptop.findIndex((item) => item.id === numericId);
    if (index === -1) return null;

    dataLaptop[index] = { ...dataLaptop[index], ...dataUpdate, id: numericId };
    return dataLaptop[index];
  },

  delete: (id) => {
    const numericId = parseInt(id, 10);
    const index = dataLaptop.findIndex((item) => item.id === numericId);
    if (index === -1) return false;

    dataLaptop.splice(index, 1);
    return true;
  }
};

module.exports = laptopModel;