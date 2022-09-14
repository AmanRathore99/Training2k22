const http = require("https");

const options = {
  method: "GET",
  hostname: "weatherapi-com.p.rapidapi.com",
  port: null,
  path: "/current.json?q=Delhi",
  headers: {
    "X-RapidAPI-Key": "ef0c0d2827msh95b0c4ca48d1eaep18389fjsn6244cb3f0107",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    useQueryString: true,
  },
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
