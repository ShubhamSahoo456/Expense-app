const express = require("express");
const expenseRouter = require("./routes/expenseRoute");
require("./config/connection");

const app = express();
app.use(express.json());
app.use("/api/v1", expenseRouter);

app.listen(8000, () => {
  console.log("port is listening at 8000");
});
