require("dotenv").config();
const express = require("express");
const cors = require("cors");

const githubRoutes = require("./github");
const linkedinRoutes = require("./linkedin");

const app = express();
app.use(cors({
  origin: ["https://jezebelguedes-devops.onrender.com"]
}));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// ---------------------------
// ROTAS
// ---------------------------

// Rotas GitHub -> /api/github/...
app.use("/api/github", githubRoutes);

// Rotas LinkedIn -> /api/linkedin/...
app.use("/api/linkedin", linkedinRoutes);

// Rota pública
app.get("/session", (req, res) => {
  res.json({
    authenticated: true,
    info: "https://www.linkedin.com/in/jezebel-guedes",
    picture: "https://avatars.githubusercontent.com/u/75287031?s=400&u=bc7277b5c6e71e67d82d8e5adde3fac2498552b9&v=4"
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
  console.log(`➡ Rotas GitHub:    http://localhost:${PORT}/api/github`);
  console.log(`➡ Rotas LinkedIn:  http://localhost:${PORT}/api/linkedin`);
});
