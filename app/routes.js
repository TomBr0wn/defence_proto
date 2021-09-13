const express = require("express");
const router = express.Router();

const formData = [];

// Add your routes here - above the module.exports line

// Start folder specific routes
router.use("/v1", require("./views/v1/_routes"));
router.use("/v2", require("./views/v2/_routes"));
router.use("/v3", require("./views/v3/_routes"));

//////////////  Create V2 dataset route   ////////////////////////////////////
router.post("/v2/create-new-dataset-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var datasetId = req.session.data["dataset-id"];
	console.log("Your new " + datasetId);

	console.log(datasetId);

	console.log(formData);

	res.redirect("create-new-dataset");
});

//////////////  Create V3 dataset route   ////////////////////////////////////
router.post("/v3/create-new-dataset-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var datasetId = req.session.data["dataset-id"];
	console.log("Your new " + datasetId);

	console.log(datasetId);

	console.log(formData);

	res.redirect("create-new-dataset");
});


//////////////  Create V2 dataset home new record/row   ////////////////////////////////////
router.post(
	"/v2/defence-home-add-row",
	function (req, res, next) {
		console.log("res");
		console.log(req.session.data);
		// this also works as long as the variable doesn't have a - in the name
		formData.push(req.session.data);

		res.redirect("defence-home-filled");
		
	
	});
	
//////////////  Create V3 dataset home new record/row   ////////////////////////////////////
router.post(
	"/v3/defence-home-add-row",
	function (req, res, next) {
		console.log("res");
		console.log(req.session.data);
		// this also works as long as the variable doesn't have a - in the name
		formData.push(req.session.data);

		res.redirect("defence-home-filled");
		
	
	});

//////////////  V2 comparable data   ////////////////////////////////////
	
router.post("/v2/compare-with-another-dataset", function (req, res) {
	console.log("res");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);
	//res.render("defence-home", { results: formData });
	res.redirect("existing-and-comparable-new");
});

//////////////  V3 comparable data   ////////////////////////////////////
	
router.post("/v3/compare-with-another-dataset", function (req, res) {
	console.log("res");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);
	//res.render("defence-home", { results: formData });
	res.redirect("existing-and-comparable-new");
});

module.exports = router;
