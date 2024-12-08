const express = require("express");
const cors = require('cors');
const userModel = require('./model/usermodel')
const dbconnection = require('./config/database.js')


const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req,res)=>{
    userModel.find({}).then((users)=>{
        res.json(users)
    })
})

app.post("/create-user",async (req, res) => {

    const users = await userModel.find({});
    console.log( users.length);

    const { name, username, email, phone, website, company, address } = req.body;

    console.log('Received data:', { name, username, email, phone, website, company, address });
    // Here, you can process the received data (e.g., save it to a database)
    res.send({ message: 'Data received successfully - from backend' });

    await userModel.create({
        id : users.length + 1,
        username : username,
        name : name,
        email : email,
        phone : phone,
        address : address,
        website : website,
        company : company
    });
  })

  app.get("/delete-user", async (req,res)=>{
    await userModel.findOneAndDelete({
        _id : req.query.id
    })
    res.send(`user with ${req.query.id} deleted`)
  })

app.listen(3001, ()=>console.log("running..."))