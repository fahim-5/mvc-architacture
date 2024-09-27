const path = require("path");


exports.gethome = (req, res) => {
  // Serve the home.html file located in the views folder
  res.sendFile(path.join(__dirname, "/../views/home.html"));
};



