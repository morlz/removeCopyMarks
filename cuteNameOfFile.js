const fs = require("fs")

var data = fs.readdirSync('./')

data.forEach((el, id) => {
	fs.renameSync( "./" + el, "./" + ( el.split("-копия").join("") ) );
	console.log("renamed:", "./" + el, "to:", "./" + ( el.split("-копия").join("") ));
});
