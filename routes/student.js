var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM student ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.send(data);
			// response.render('student', {title:'Node.js MySQL CRUD Application', action:'listStudent', studentData:data});
		}

	});

});

//to add the group created to the database
router.get("/addStudent", function(request, response, next){

	response.render("group", {title:'Insert Data into MySQL', action:'addstudent'});

});

module.exports = router;