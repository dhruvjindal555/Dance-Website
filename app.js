const express = require('express');
const app = express();
const path = require("path");
const port = 80;

//EXPRESS SPECIFIC STUFF
app.set('/static',express.static('static'))
app.set(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine','pug') //Set the template engine as pug
app.set('views' , path.join(__dirname,"views")) //Set ther views directory


//ENDPOINTS
app.get('/',(req,res)=>{
    const params = {

    }
    res.status(200).render('home.pug')
})
app.get('/contact',(req,res)=>{
    res.status(200).render('contact.pug')
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully at ${port}`)
})