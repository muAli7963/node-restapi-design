const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {signup, signin, protect} = require('./utils/auth.js');
const userRouter = require('./resources/user/user.controllers.js');
const itemRouter = require('./resources/item/item.controllers.js');
const listRouter = require('./resources/list/list.controllers.js');
const {connect} = require('./utils/db.js');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', signup);
app.post('/signin', signin);


app.use('/api', protect);
app.use('/api/user', userRouter);
app.use('/api/item', itemRouter);
app.use('/api/list', listRouter);











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
