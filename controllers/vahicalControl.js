const Vahical = require("../models/vahical");

exports.getVahical = async(req, res,next) => {
    const seats = req.body.seats
        const uniqueCategories =await Vahical.findAll({
            attributes: ['name'], 
            group: ['name'],
            where: {
              seats
            },
        })
        const setdistinct = uniqueCategories.map(categoryInstance => categoryInstance.name)
        res.render('vahicalType', {
        prods: setdistinct,
        pageTitle: 'vahicalType',
        path: '/vahicalType',
      })
}






    // await Vahical.findAll({
    //   where:{
    //     seats,   
    //   }
    // })
    // .then(prods =>{
    //       let set= new Set();
    //       for(let i=0; i<prods.length; i++) {
    //           set.add(prods[i].name);
    //       }
          // return res.json(set);

     
        // Extract the unique values from the result
 
    // .then(products => {
    //     res.render('models', {
    //     prods: products,
    //     pageTitle: 'models',
    //     path: '/models',
    //     distinctCategories:distinctCategories
    //   });
    // })
    // catch(err => {
    //   const error = new Error(err);
    //   error.httpStatusCode = 500;
    //   return next(error);
    // });


// };


