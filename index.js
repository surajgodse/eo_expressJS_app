const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/find", (req, res)=>{
	let num = req.query.number;
	let n = parseInt(num);
	let r = n % 2 == 0 ? "EVEN" : "ODD";
	res.json({"msg":r});
});

app.listen(9000, ()=>{console.log("Ready @ 9000");});