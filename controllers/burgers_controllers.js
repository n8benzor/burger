const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      const hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers/create", function(req, res) {
    burger.create([
        "name", "devoured"
      ], [
        req.body.name, req.body.devoured
      ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    console.log("condition", condition);

	burger.update(
        {devoured: true},
         condition, function(data){
		res.redirect("/")
	});
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  