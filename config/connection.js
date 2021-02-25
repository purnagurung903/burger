// set uo mysql connection
const mysql = require("mysql");


// if(process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// }
// else {
  const connection = mysql.createConnection({
    host: "localhost",
    port: 3360,
    user: "root",
    password: "",
    database: "burgers_db",
  });
//}

connection.connect((err) => {
  if (err) {
    console.error(`error connection: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;