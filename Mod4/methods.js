let house = {
  color: "white",
  mainRoom: 15,
  kitchen: 10,
  bathroom: 8,
  bedroom: 20,
  totalSize: function () {
    const sizeTotal =
      this.mainRoom + this.kitchen + this.bathroom + this.bedroom;
    console.log(`The total size of the house is ${sizeTotal}`);
    return sizeTotal;
  },
};

house.totalSize();
