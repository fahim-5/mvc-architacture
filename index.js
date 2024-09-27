const express = require("express");
const app = express();
const PORT = 3000;

const homeRouter = require("./routes/home.routes");
const userRouter = require("./routes/users.routes");
const productRouter = require("./routes/product.routes");



app.use(express.urlencoded({ extended: true }));





app.use(homeRouter);
app.use(userRouter);
app.use(productRouter);



app.use((req, res) => {
  res.status(404).json({
    message: "Resource not found",
  });
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
