require('dotenv').config();
const os = require('os');
const fs = require('fs');
const express = require('express');


const SERVER_IP = "localhost";
const SERVER_PORT = 80; // process.env.SERVER_PORT


class server {
	constructor(SERVER_IP, SERVER_PORT){
		this.SERVER_PORT = SERVER_PORT
		this.SERVER_IP = SERVER_IP
		this.app = express();

		this.app.use(express.static("public"))
		console.log("[ SERVER ]  Started server.")
	}

	start_server(){
		this.app.listen(this.SERVER_PORT, this.SERVER_IP, error => {
            if (error)
            	console.log("[ SERVER ]  Error in server startup.");
            else
                console.log("[ SERVER ]  Example app listening at http://" + this.SERVER_IP + ":" + this.SERVER_PORT)
        });
	}

	get_req(){
		this.app.get('*', (req,res) => {
			// res.sendFile(__dirname + "/public/index.html")
			// res.render("public/index")
			// res.download("app.js")
			// res.json({"message":"error"});
			// res.sendStatus(500);
			res.send("Hello");
			// res.redirect("/page")
			console.log("[ SERVER ]  Req path: " + req.path)
		})
	}

	post_req(){
		this.app.post('*', (req, res) => {
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
	}
}


let main_server = new server(SERVER_IP, SERVER_PORT)
main_server.start_server()