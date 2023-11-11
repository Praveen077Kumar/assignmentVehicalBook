const path = require('path');
const express = require('express');
const router = express.Router();
const userRoute= require('../controllers/userControl');

router.post('/seats',userRoute.postUser);

module.exports = router;