import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("signup.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/signup", (req, res) => {
  res.render("dashboard.ejs", { data: req.body })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
