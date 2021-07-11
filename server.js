const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select /:city/:category to retrieve data"
	);
});

//Get any data from any city
app.get("/:city/:category", (req, res) => {
	const city = req.params.city;
	const category = req.params.category;
	if (city && category){
	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
	const cityData = require(`./data/${capCity}`);
	res.json(cityData[category]);
	}else{
		res.status(400).json({msg:`Error no data for ${city} or incorrect ${category} please see root for documentation`});
	}
});

// //Get Pharmacy data
// app.get("/:city/pharmacies", (req, res) => {
// 	const { city } = req.params;
// 	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
// 	const cityData = require(`./data/${capCity}`);
// 	res.json(cityData.pharmacies);
// });

// //Get College data
// app.get("/:city/colleges", (req, res) => {
// 	const { city } = req.params;
// 	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
// 	const cityData = require(`./data/${capCity}`);
// 	res.json(cityData.colleges);
// });

// //Get Doctor data
// app.get("/:city/doctors", (req, res) => {
// 	const { city } = req.params;
// 	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
// 	const cityData = require(`./data/${capCity}`);
// 	res.json(cityData.doctors);
// });

// //Get Hospital data
// app.get("/:city/hospitals", (req, res) => {
// 	const { city } = req.params;
// 	const capCity = city.charAt(0).toUpperCase() + city.slice(1);
// 	const cityData = require(`./data/${capCity}`);
// 	res.json(cityData.hospitals);
// });

const listener = app.listen(process.env.PORT);
console.log("Listening on PORT:", listener.address().port);
