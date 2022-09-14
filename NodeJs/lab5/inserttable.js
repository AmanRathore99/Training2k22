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
  var sql = "INSERT INTO departments (DEPTID, DEPTNAME, CITY) VALUES ?";
  var values = [
    [1, "ACCOUNTANT", "NEW YORK"],
    [2, "RESEARCH", "DALLAS"],
    [3, "SALES", "CHICAGO"],
    [4, "OPERATIONS", "BOSTON"],
    [5, "R&D", "PUNE"],
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
