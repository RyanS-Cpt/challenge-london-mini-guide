const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select :city & /pharmacies, /colleges, /doctors, /hospitals"
	);
});

console.log("This is here!");
//Get Pharmacy data
app.get("/:city/pharmacies", (req, res) => {
	const { city } = req.params;
	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
	const cityData = require(`./data/${capCity}`);
	res.json(cityData.pharmacies);
});

//Get College data
app.get("/:city/colleges", (req, res) => {
	const { city } = req.params;
	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
	const cityData = require(`./data/${capCity}`);
	res.json(cityData.colleges);
});

//Get Doctor data
app.get("/:city/doctors", (req, res) => {
	const { city } = req.params;
	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
	const cityData = require(`./data/${capCity}`);
	res.json(cityData.doctors);
});

//Get Hospital data
app.get("/:city/hospitals", (req, res) => {
	const { city } = req.params;
	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
	const cityData = require(`./data/${capCity}`);
	res.json(cityData.hospitals);
});

const listener = app.listen(process.env.PORT);
console.log("Listening on PORT:", listener.address().port);
