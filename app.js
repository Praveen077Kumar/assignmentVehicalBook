const express = require('express');
const sequelize = require('./db');
const bodyParser = require('body-parser');
const app = express();
const path= require('path');
const PORT = process.env.PORT || 3000;


//SETUP PATH FOR THE TEMPLATES 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));  //setup static path

app.get('/', (req, res) => {
  res.render('main', { pageTitle: 'Home Page' });
});


//access port to listen requests
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});

