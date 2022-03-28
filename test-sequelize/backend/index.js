const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 8000;

const { database } = require("./src/db");
database.connect();

server.use(express.json());
server.use(cors());

server.use("/api/characters", require("./src/routes/characters"));

server.listen(PORT, () => {});
