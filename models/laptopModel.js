let dataLaptop = [
  { id: 1, merk: 'Asus', harga: 10000000 },
  { id: 2, merk: 'Lenovo', harga: 12000000 }
];
let nextId = 3;

module.exports = {
  getAll: () => dataLaptop,
  getById: (id) => dataLaptop.find(item => item.id === parseInt(id)),
  create: (data) => {
    const baru = { id: nextId++, ...data };
    dataLaptop.push(baru);
    return baru;
  },
  update: (id, data) => {
    const index = dataLaptop.findIndex(item => item.id === parseInt(id));
    if (index === -1) return null;
    dataLaptop[index] = { ...dataLaptop[index], ...data };
    return dataLaptop[index];
  },
  delete: (id) => {
    const index = dataLaptop.findIndex(item => item.id === parseInt(id));
    if (index === -1) return false;
    dataLaptop.splice(index, 1);
    return true;
  }
};