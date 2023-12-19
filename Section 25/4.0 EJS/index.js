import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    
    let type = "e weekday";
    let adv = "work slave!";

    if (day === 0|| day === 6)  {
        type= "the weekend";
        adv = "you are free for now Slave!";
    }
  res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
  console.log(`server running on port ${port}.`);
});
