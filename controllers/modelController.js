const Vahical = require("../models/vahical");


exports.getModels = async(req, res,next) => {
    const name = await req.body.model
    let carmodels=await Vahical.findAll({
            where: {
              name
            },
        })
        res.render('vahicalModels', {
        models: carmodels,
        pageTitle: 'vahicalType',
        path: '/model',
      })
}