const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send(
		"You made it here, well done! Please select /pharmacies /colleges /doctors or /hospitals"
	);
});

const listener = app.listen(process.env.PORT);
console.log(listener.address().port);
