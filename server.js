const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select :city & /pharmacies, /colleges, /doctors, /hospitals"
	);
});

//Get Pharmacy data
app.get("/:city/pharmacies", (req, res) => {
	const { city } = req.params;
	const cityData = require(`./data/${city}`);
	// console.log(cityData.pharmacies);
	res.json(cityData.pharmacies);
});

//Get College data
app.get("/:city/colleges", (req, res) => {
	const { city } = req.params;
	const cityData = require(`./data/${city}`);
	res.json(cityData.colleges);
});

//Get Doctor data
app.get("/:city/doctors", (req, res) => {
	const { city } = req.params;
	const cityData = require(`./data/${city}`);
	res.json(cityData.doctors);
});

//Get Hospital data
app.get("/:city/hospitals", (req, res) => {
	const { city } = req.params;
	const cityData = require(`./data/${city}`);
	res.json(cityData.hospitals);
});

const listener = app.listen(process.env.PORT);
console.log("Listening on PORT:", listener.address().port);
