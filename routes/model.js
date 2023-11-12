const express = require('express');
const router = express.Router();
const ModelRoute= require('../controllers/modelController');


// router.use(VahicalRoute.getVahical);
router.post('/model',ModelRoute.getModels);
module.exports = router;