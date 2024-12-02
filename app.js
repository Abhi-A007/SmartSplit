import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
