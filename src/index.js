/*const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});*/

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "http://localhost:4000/movies",
    user: "root",
    password: "",
    database: "Local Instance MySQL80",
  });
  connection.connect();
  return connection;
}

// create and config server
//const server = express();
//server.use(cors());
//server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//crear el enpoint
server.get("/movies", async (req, res) => {
  // (req, res): Require: para cuando envíen datos | Response: enviar desde el server datos al front
  const genreFilterParam = req.query.genre;
  const sortFilterParam = req.query.sort;
  let queryMovies = "SELECT * FROM movies";

  // obtener los datos de la bbdd
  // 1.- obtener la conexión
  const conn = await getConnection();
  // 2.- consulta de la bbdd: obtener todas las peliculas
  if (genreFilterParam === "") {
    queryMovies = "SELECT * FROM movies";
  } else if (genreFilterParam === "Crimen") {
    queryMovies = "SELECT * FROM movies WHERE genre='Crimen'";
  } else if (genreFilterParam === "Comedia") {
    queryMovies = "SELECT * FROM movies WHERE genre='Comedia'";
  }
  if (sortFilterParam === "asc") {
    queryMovies = "SELECT * FROM movies order by title asc";
  } else if (sortFilterParam === "desc") {
    queryMovies = "SELECT * FROM movies order by title desc";
  }

  // 3.- ejecutar la consulta
  const [results] = await conn.query(queryMovies);
  // [results] <- con [] porque de todo lo que trae, dame solo los resultados
  console.log(results);
  /* res.json(results); */
  console.log("genre: " + req.query.genre);
  conn.end();
  res.json({
    success: true,
    movies: results,
  });
});

//EJERCICIO 4.5
//Crea la conexión a la bases de datos
//const connectDB = require("./db");

//Función para insertar un nuevo usuario en la BD
//const insertUser = async (data) => {
// const insert = "INSERT INTO  movies SET ?";

//const db = await connectDB();
//const uuid = utils.getUuid();
//const dataToInsert = { id: uuid, ...data };

//const [insertResultSet] = await db.query(insert, dataToInsert);

//return { changes: insertResultSet.affectedRows, uuid };
//};

/*var userModel = require("../models/userModel");

exports.createUser = async function (req, res) {
  const user = req.body;
  try {
    //Utilizo el modelo creado para insertar en la BD
    const insertResult = await userModel.insertUser(user);

    //Envío una respuesta especificando que el usuario se ha creado
    res.json({
      success: true,
      useURL: `https://${req.headers.host}/user/${user.uuid}`,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      error: `Database error: ${error.code}`,
    });
  }
};*/
