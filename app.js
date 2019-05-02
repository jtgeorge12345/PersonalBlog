const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile("./myBlog.html", { root: __dirname});
})

app.get("/myStyle.css", (req, res) => {
  res.sendFile("./myStyle.css", { root: __dirname})
})

app.get("/scripts.js", (req, res) => {
  res.sendFile("./scripts.js", { root: __dirname})
})



app.listen(PORT, ()=>{
  console.log("app is up on port "+PORT);
});
