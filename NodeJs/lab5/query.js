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
  var sql = `select * from departments`;
  //var sql = `select * from departments where city = "DALLAS"`;
  //var sql = `select * from departments where deptName = "SALES"`;

  // UPDATE
  //var sql = `UPDATE departments SET city = "TEXAS" where deptName = "ACCOUNTANT"`;

  // DELETE
  // var sql = `DELETE FROM departments where deptName = "R&D"`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
