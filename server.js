const express = require("express");

const app = express();

const stratfordData = require("./data/Stratford.json");
const harrowData = require("./data/Harrow.json");
const heathrowData = require("./data/Heathrow.json");

// console.log(stratfordData);

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select /pharmacies /colleges /doctors or /hospitals"
	);
});

//Get Pharmacy data
app.get("/pharmacies", (req, res) => {
	res.json(stratfordData.pharmacies);
});

//Get College data
app.get("/colleges", (req, res) => {
	res.json(stratfordData.colleges);
});

//Get Doctor data
app.get("/doctors", (req, res) => {
	res.json(stratfordData.doctors);
});

//Get Hospital data
app.get("/hospitals", (req, res) => {
	res.json(stratfordData.hospitals);
});

const listener = app.listen(process.env.PORT);
console.log("Listening on PORT:", listener.address().port);
