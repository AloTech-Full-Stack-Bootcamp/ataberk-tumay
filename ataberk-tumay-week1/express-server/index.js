const express = require("express");
const app = express();
const port = 5000;

app.get("/index", (req, res) => {
  res.send("<h1>This is the index page!!!!</h1>");
});
app.get("/about", (req,res)=>{
  res.send("<h1>This is the about page!!!!</h1>");
});
app.get("/contact",(req,res)=>{
 res.send("<h1>You can reach us by asking directions to the closest cat!</h1>");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
