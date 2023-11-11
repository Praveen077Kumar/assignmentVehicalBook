const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'vahical_rental_db',
 'root',
 'praveen12345',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connected to database');
}).catch((error) => {
   console.error('Unable to connect with database: ', error);
});


module.exports = sequelize
