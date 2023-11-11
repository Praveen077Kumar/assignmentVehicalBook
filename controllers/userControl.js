const User = require("../models/user");

exports.postUser = async (req, res, next) => {
  const { firstname, lastname } = req.body;
  try {
    const user = await User.findOne({
      where: {
        firstname,
        lastname,
      },
    });
    if (user) {
      return res.status(200).render("numberofSeats");
    } else {
      res.send("Invalid username or password");
    }
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).send("Internal Server Error");
  }
};
