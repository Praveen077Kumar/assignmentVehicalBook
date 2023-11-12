const express = require('express');
const sequelize = require('./db');
const bodyParser = require('body-parser');
const app = express();
const path= require('path');
const PORT =3000;

// routes 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res,next) => {
   res.render('main', {
        pageTitle: 'vahicalType',
        path: '/',
      });
    next()
});

const userroute= require('./routes/route');
const vahicalRoute=require('./routes/vehical');
const modelRoute= require('./routes/model');
const bookinRoute= require('./routes/booking');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/',userroute);
app.use('/',vahicalRoute)
app.use('/',modelRoute)
app.use('/',bookinRoute)



// app.post('/submit-booking', async (req, res) => {
//   try {
//     // Validate the request data here...
    
//     const { userId, type, startDate, endDate } = req.body;

//     const vehicle = await Vehicle.findOne({
//       where: { type },
//     });

//     if (!vehicle) {
//       return res.status(404).json({ error: 'Vehicle not found' });
//     }

//     const booking = await Booking.create({
//       userId,
//       vehicleId: vehicle.id,
//       startDate,
//       endDate,
//     });

//     return res.status(201).json({ bookingId: booking.id, message: 'Booking created successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// });




sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
