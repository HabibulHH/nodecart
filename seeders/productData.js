const products = [
  {
    name: "Tupi",
    price: 123,
    available: true,
    variants: [
      {
        color: "white",
        size: ["large", "medium", "extra-large"],
        quantity: 30,
      },
      {
        color: "red",
        size: ["small", "medium"],
        quantity: 20,
      },
    ],
  },
  {
    name: "Hand bag",
    price: 123,
    available: true,
    variants: [
      {
        color: "red",
        size: ["large", "medium", "extra-large"],
        quantity: 30,
      },
      {
        color: "pink",
        size: ["small", "medium"],
        quantity: 20,
      },
    ],
  },
  {
    name: "Bike",
    price: 123,
    available: true,
    variants: [
      {
        color: "white",
        size: ["large", "medium", "extra-large"],
        quantity: 30,
      },
      {
        color: "black",
        size: ["small", "medium"],
        quantity: 20,
      },
    ],
  },
];

module.exports = products;
