import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var count = 0;
var fullname = "";
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{fullname:fullname});
});

app.post("/submit", (req, res) => {
  fullname = req.body["fName"]+req.body["lName"];
  count = fullname.length;
  
  res.render("index.ejs",{letters: count,fullname:fullname})
  fullname="";
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
