const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {connect} = require('./utils/db.js');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello dude");
});











const port = 3000;



const start = async ()=> {
	try {
		await connect();
	    app.listen(port, () => {
           console.log(`APP IS RUNNING ON http://localhost:${port}/`);
});

	} catch(e) {
		console.error(e);
	}
}

module.exports = {start}
