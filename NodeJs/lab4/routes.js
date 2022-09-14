const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end("<h1>Blazeclan logo will be displayed</h1>");
  } else if (req.url === "/about") {
    res.write("<h1>Company Vision : - </h1>");
    res.write("<h1>Company Mission : - </h1>");
  } else if (req.url === "/contact") {
    res.write(
      "<h2> Company address :- A-wing 8th Floor, Godrej Eternia C, Old Pune Mumbai Highway, Wakdewadi, Shivaji Nagar,Pune 411005. </h2>"
    );
  } else {
    res.end(`<h1>oops!</h1>
    <p>we can't find the page you've been looking for </p>
    <a href = "/"> Home </a>
    `);
  }
});

server.listen(5000, () => {
  console.log("Server listen at port 5000");
});
