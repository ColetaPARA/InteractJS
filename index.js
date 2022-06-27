// Carrega a lib `express`, responsável pelo backend do projeto
const express = require("express");
// Carrega a lib `ejs`, responsável por interpretar os templates HTML
const ejs = require("ejs");
// Seleciona a porta onde a aplicação rodará com base no ambiente
const port = process.env.PORT || 3000;

// Inicializa o `express`
const app = express();
app.disable("x-powered-by");

// Aponta o diretório onde os arquivos estáticos estão
app.use(express.static("public"));
app.use("/src", express.static("src"));

// Configura a engine de visialização para EJS
app.set("view engine", "ejs");

// Aponta em qual porta o web server vai rodar
app.listen(port, () => {
  console.log(`App startup...`);
});

// *** GET Routes - Mostra as paginas ***

// Menu
app.get("/", function (_req, res) {
  res.render("pages/menu");
});

// Gameplay
app.get("/gameplay", (_req, res) => {
  res.render("pages/gameplay");
});

app.get("/credits", function (_req, res) {
  res.render("pages/credits");
});

app.get("/options", function (_req, res) {
  res.render("pages/options");
});

app.get("/tutorial", function (_req, res) {
  res.render("pages/tutorial");
});
