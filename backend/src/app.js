const express = require("express");
const cors = require("cors");

const consultasRoutes = require("./routes/consultas.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "API TP Estudio Jurídico funcionando",
  });
});

app.use("/api/consultas", consultasRoutes);

module.exports = app;