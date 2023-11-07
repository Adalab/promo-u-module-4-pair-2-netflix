const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");
const app = express();
app.use(cors());
app.use(express.json({ limit: "25mb" }));

async function getConnection() {
  //creary configurar la conexion
  const connection = await mysql.createConnection({
    host: "http://localhost:3306/movies",
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
const serverPort = 3306;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//crear el enpoint
app.get("/movies", async (req, res) => {
  const conn = await getConnection();
  let sql = "SELECT * FROM movies ";
  const [results] = await conn.query(sql);
  conn.end();

  res.json(results);
  connection.end();
});

getConection;

const db = await connectDB();
const getMovie = async (data) => {
  const get = "INSERT INTO movies SET ?";
  const db = await connectDB();
  const id = utils.getid();
  const dataToGet = { id: id, ...data };
  const [insertResultSet] = await db.query(get, dataToGet);
  res.json({ success: true, movies: results });
  return {
    changes: insertResultSet.affectedRows,
    uuid,
  };
};

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
