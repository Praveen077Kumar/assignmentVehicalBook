// seed.js
const sequelize = require("./db");
const Vehicle = require("./models/vahical");
const User = require("./models/user");

async function seed() {
  await sequelize.sync({ force: true });

  const vehicles = await Vehicle.bulkCreate([
    { name: "Hatchback", model: "Tata Tiago", seats: 4 },
    { name: "Hatchback", model: "Suzuki celerio", seats: 4 },
    { name: "Hatchback", model: "Hyundai i20", seats: 4 },
    { name: "SUV", model: "Hyundai Creta", seats: 4 },
    { name: "SUV", model: "Kia Seltos", seats: 4 },
    { name: "SUV", model: "Toyota Fortuner", seats: 4 },
    { name: "Sedan", model: "Honda Accord", seats: 4 },
    { name: "Sedan", model: "Mazda5", seats: 4 },
    { name: "cruiser", seats: 2, model: "Aston Martin DB12" },
    { name: "cruiser", seats: 2, model: "Ferrari Roma" },
    { name: "cruiser", seats: 2, model: "Jaguar F-TYPE" },
    { name: "sports", seats: 2, model: "Audi R8" },
    { name: "sports", seats: 2, model: "Nissan 370Z" },
    { name: "sports", seats: 2, model: "Porsche Boxster" },
  ]);

  const user = await User.bulkCreate([
    { firstName: "praveen", lastName: "kumar" },
    { firstName: "praveen.K", lastName: "verma" },
  ]);
  console.log("Seed completed");
  process.exit(0);
}

seed();
