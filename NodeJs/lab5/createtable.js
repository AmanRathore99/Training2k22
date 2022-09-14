var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "aman",
  database: "hr_db",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = `CREATE TABLE IF NOT EXISTS Departments (
        deptID        int PRIMARY KEY AUTO_INCREMENT,
        deptName      VARCHAR(15) NOT NULL,
        city          VARCHAR(10) NOT NULL
    )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
