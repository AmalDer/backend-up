var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM user ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('user', {title:'Node.js MySQL CRUD Application', action:'list', userData:data});
		}

	});

});

//to add the group created to the database
router.get("/add", function(request, response, next){

	response.render("user", {title:'Insert Data into MySQL', action:'add'});

});

module.exports = router;