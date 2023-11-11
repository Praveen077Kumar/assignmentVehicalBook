const Vahical = require("../models/vahical");

exports.bookingDate = async(req, res,next) => {
    res.render('selectDate', {
        pageTitle: 'vahicalType',
        path: '/bookingdate',
      });
}


exports.getDates=async(req,res,next) => {
    res.render('main', {
        pageTitle: 'vahicalType',
        path: '/',
      });
      
};



