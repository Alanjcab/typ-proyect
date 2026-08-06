const helmet = require("helmet");

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const consultasRoutes = require("./routes/consultas.routes");

const app = express();

app.use(cors({origin: [process.env.FRONTEND_URL,"http://localhost:5173",],}));
app.use(helmet());
app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
  res.json({
    message: "API TP Estudio Jurídico funcionando",
  });
});

app.use("/api/consultas", consultasRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;