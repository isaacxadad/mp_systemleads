const express = require("express");
const bodyparser = require("body-parser");

const PORT = 3023;
const app = express();

app.listen(PORT, () => console.log("Servidor está rodando na porta", PORT))