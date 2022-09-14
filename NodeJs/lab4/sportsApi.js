const http = require("https");

const options = {
  method: "GET",
  hostname: "cricbuzz-cricket.p.rapidapi.com",
  port: null,
  path: "/mcenter/v1/41881",
  headers: {
    "X-RapidAPI-Key": "ef0c0d2827msh95b0c4ca48d1eaep18389fjsn6244cb3f0107",
    "X-RapidAPI-Host": "cricbuzz-cricket.p.rapidapi.com",
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
