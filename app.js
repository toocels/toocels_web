require('dotenv').config();
const os = require('os');
const fs = require('fs');
const express = require('express');
const app = express();

const SERVER_IP = "localhost";
const SERVER_PORT = 80; // process.env.SERVER_PORT


console.log("Starting server...")

app.use(express.static("public"))

app.get('*', (req,res) => {
	// res.sendFile(__dirname + "/public/index.html")
	// res.render("public/index")
	// res.download("app.js")
	// res.json({"message":"error"});
	// res.sendStatus(500);
	res.send("Hi");
	// res.redirect("/page")
	console.log("[ APP ]  Req path: " + req.path)
})


app.post('*', (req, res) => {
    let body = '';
    req.on('data', data => body += data)
    req.on('end', () => {
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET',
        });
        body=JSON.parse(body)
    });

    //write code from here
    res.end("Ok");
});


app.listen(SERVER_PORT)
