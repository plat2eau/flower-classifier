const express = require("express");
const app = express();

const cors = require('cors');

const PORT = 8080;



app.use(cors());

app.get('/', (req,res)=>{
    res.send("Hello from backend");
})

app.listen(PORT, 'localhost', () => {
  console.log("Server listening on port "+PORT);
});
