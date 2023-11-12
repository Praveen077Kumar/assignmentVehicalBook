const express = require('express');
const router = express.Router();
const VahicalRoute= require('../controllers/vahicalControl');

router.post('/vahicals',VahicalRoute.getVahical);
module.exports = router;