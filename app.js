const express = require('express');
const path= require('path');
const app = express();
const PORT = process.env.PORT || 3000;


//SETUP PATH FOR THE TEMPLATES 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));  //setup static path

app.get('/', (req, res) => {
    res.send("<h1>HELLO PROJECT</h1>");   //route setup
});


//access port to listen requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);  
  });

