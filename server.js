const express = require("express");

const app = express();

// const stratford = require("./data/Stratford.json");
// const harrow = require("./data/Harrow.json");
// const heathrow = require("./data/Heathrow.json");

// const cityData = [stratford, harrow, heathrow];

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select :city & /pharmacies or /colleges or /doctors or /hospitals"
	);
});

//Get Pharmacy data
app.get("/:city/pharmacies", (req, res) => {
	const { city } = req.params;
	const cityData = require(`./data/${city}`)
	// console.log(cityData.pharmacies);
	res.json(cityData.pharmacies);
});

//Get College data
app.get("/:city/colleges", (req, res) => {
	const { city } = req.params;
	res.json(city.colleges);
});

//Get Doctor data
app.get("/:city/doctors", (req, res) => {
	const { city } = req.params;
	res.json(city.doctors);
});

//Get Hospital data
app.get("/:city/hospitals", (req, res) => {
	const { city } = req.params;
	res.json(city.hospitals);
});

const listener = app.listen(process.env.PORT);
console.log("Listening on PORT:", listener.address().port);
