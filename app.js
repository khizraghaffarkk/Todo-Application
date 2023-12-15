const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// intialize the express app
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
// app.use('/views', express.static('views'));


// array for add multiple items
let newItems = []
//Get method for display specific date format as h1 tag
const path = require("path");
app.set("views", path.join(__dirname, "views"));

app.get('/',(req,res) => {
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day= today.toLocaleDateString("en-US", options);
    //list for storing cuurent day in KindofDay and all added items in newListItems objects
    res.render("list", {KindofDay:day, newListItems:newItems});
})

//post method for push/add new item in empty array of newItems
app.post('/', (req,res) => {
    let newItem= req.body.newItem;
    newItems.push(newItem);
    res.redirect('/');
})

// command for checking server port is working or not at console
app.listen(3000, () => console.log("post is runnig at server:3000"));