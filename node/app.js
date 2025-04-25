const express = require ("express");
const bodyParser =require ("body-parser");
const mongoose = require ("mongoose");

const app = express();
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://aditya:23456789@cluster0.2cyxpss.mongodb.net/');

const kbtSchema= new mongoose.Schema({
        name:String,
        mark:Number
});

const kbt = mongoose.model('kbt',kbtSchema);


// to check server conectivity
app.get('/',(req,res) => {
    res.send("welcome ");
});




//to get all recoder from table
app.get('/kbt/',async(req,res) => {
       // const {name} = req.params;
        const a = await kbt.find ({});
        res.send(a);
});

app.listen(3000,() =>  {
    console.log("server running");
    //console.log(a);
});