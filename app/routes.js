const express = require("express");
const path = require("path");
const router = express.Router();

const formData = [];

// Add your routes here - above the module.exports line

// Start folder specific routes
router.use("/v1", require("./views/v1/_routes"));
router.use("/v2", require("./views/v2/_routes"));
router.use("/v3", require("./views/v3/_routes"));
router.use("/v4", require("./views/v4/_routes"));
router.use("/v5", require("./views/v5/_routes"));
router.use("/v6", require("./views/v6/_routes"));
router.use("/v62", require("./views/v62/_routes"));

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

//////////////  Create V2 dataset home new record/row   ////////////////////////////////////
router.post("/v2/defence-home-add-row", function (req, res, next) {
	console.log("res");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	res.redirect("defence-home-filled");
});

//////////////  Create V3 dataset route   V3 ////////////////////////////////////
router.post("/v3/create-new-case-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var createDescription = req.session.data["description"];
	var createRegValUnit = req.session.data["reg-val-units"];

	var createEconRegion = req.session.data["economic-region"];
	var createbillAuthCodes = req.session.data["bill-auth-codes"];
	var createBulkClassInd = req.session.data["bulk-class-indicator"];

	var createSubLocation = req.session.data["sub-location"];
	var createScatCode = req.session.data["scat-code"];
	var createScatSuffix = req.session.data["scat-suffix"];

	console.log(formData);

	res.redirect("create-new-case");
});

//////////////  Create V3 dataset home new record/row   ////////////////////////////////////
router.post("/v3/defence-home-add-row", function (req, res, next) {
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

// // Run this code when a form is submitted to 'choose-app-answer'
router.post("/v3/choose-app-answer", function (req, res) {
	// Make a variable and give it the value from 'pick-service'
	var whichService = req.session.data["pick-service"];

	// Check whether the variable matches a condition
	if (whichService == "settlement") {
		// Send user to next page
		res.redirect("/v3/defence-home");
	} else {
		// Send user to other page
		res.redirect("/v3/property-groups");
	}
	req.session.destroy();
});

//
router.get("/v3/edit-case-clear-criteria", function (req, res) {
	req.session.destroy();
	res.redirect("/v3/edit-settlement-case");
});

//////////////////////////// V4 Stuff ////////////////////////////

// // Run this code when a form is submitted to 'choose-app-answer'
router.post("/v4/choose-app-answer", function (req, res) {
	// Make a variable and give it the value from 'pick-service'
	var whichService = req.session.data["pick-service"];

	// Check whether the variable matches a condition
	if (whichService == "settlement") {
		// Send user to next page
		res.redirect("/v4/defence-home");
	} else {
		// Send user to other page
		res.redirect("/v4/property-groups");
	}
	req.session.destroy();
});

router.post("/v4/create-new-case-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var createDescription = req.session.data["description"];
	var createRegValUnit = req.session.data["reg-val-units"];

	var createEconRegion = req.session.data["economic-region"];
	var createbillAuthCodes = req.session.data["bill-auth-codes"];
	var createBulkClassInd = req.session.data["bulk-class-indicator"];

	var createSubLocation = req.session.data["sub-location"];
	var createScatCode = req.session.data["scat-code"];
	var createScatSuffix = req.session.data["scat-suffix"];

	console.log(formData);
	res.redirect("create-new-case");
});

router.post("/v4/add-case-address", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var caseAddress = req.session.data["case-address"];

	console.log("Case Address: " + caseAddress);

	if (req.session.data["case-address"] != " ") {
		res.redirect("add-case-task-list");
	} else {
		res.redirect("settlement-task-list");
	}
});

router.get("/v4/edit-case-clear-criteria", function (req, res) {
	req.session.destroy();
	res.redirect("/v4/edit-settlement-case");
});


//////////////////////////// V5 Stuff ////////////////////////////

// // Run this code when a form is submitted to 'choose-app-answer'
router.post("/v5/choose-app-answer", function (req, res) {
	// Make a variable and give it the value from 'pick-service'
	var whichService = req.session.data["pick-service"];

	// Check whether the variable matches a condition
	if (whichService == "settlement") {
		// Send user to next page
		res.redirect("/v5/defence-home");
	} else {
		// Send user to other page
		res.redirect("/v5/property-groups");
	}
	req.session.destroy();
});

router.post("/v5/create-new-case-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var createDescription = req.session.data["description"];
	var createRegValUnit = req.session.data["reg-val-units"];

	var createEconRegion = req.session.data["economic-region"];
	var createbillAuthCodes = req.session.data["bill-auth-codes"];
	var createBulkClassInd = req.session.data["bulk-class-indicator"];

	var createSubLocation = req.session.data["sub-location"];
	var createScatCode = req.session.data["scat-code"];
	var createScatSuffix = req.session.data["scat-suffix"];

	console.log(formData);
	res.redirect("create-new-case");
});

router.post("/v5/add-case-address", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var caseAddress = req.session.data["case-address"];

	console.log("Case Address: " + caseAddress);

	if (req.session.data["case-address"] != " ") {
		res.redirect("add-case-task-list");
	} else {
		res.redirect("settlement-task-list");
	}
});

router.get("/v5/edit-case-clear-criteria", function (req, res) {
	req.session.destroy();
	res.redirect("/v4/edit-settlement-case");
});

//////////////////////////// V6 Stuff ////////////////////////////

// // Run this code when a form is submitted to 'choose-app-answer'
router.post("/v6/choose-app-answer", function (req, res) {
	// Make a variable and give it the value from 'pick-service'
	var whichService = req.session.data["pick-service"];

	// Check whether the variable matches a condition
	if (whichService == "settlement") {
		// Send user to next page
		res.redirect("/v6/defence-home");
	} else {
		// Send user to other page
		res.redirect("/v6/property-groups");
	}
	req.session.destroy();
});

router.post("/v6/create-new-case-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var createDescription = req.session.data["description"];
	var createRegValUnit = req.session.data["reg-val-units"];

	var createEconRegion = req.session.data["economic-region"];
	var createbillAuthCodes = req.session.data["bill-auth-codes"];
	var createBulkClassInd = req.session.data["bulk-class-indicator"];

	var createSubLocation = req.session.data["sub-location"];
	var createScatCode = req.session.data["scat-code"];
	var createScatSuffix = req.session.data["scat-suffix"];

	console.log(formData);
	res.redirect("create-new-case");
});

router.post("/v6/add-case-address", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var caseAddress = req.session.data["case-address"];

	console.log("Case Address: " + caseAddress);

	if (req.session.data["case-address"] != " ") {
		res.redirect("add-case-task-list");
	} else {
		res.redirect("settlement-task-list");
	}
});

router.get("/v6/edit-case-clear-criteria", function (req, res) {
	req.session.destroy();
	res.redirect("/v6/edit-settlement-case");
});


//////////////////////////// V62 Stuff ////////////////////////////

// // Run this code when a form is submitted to 'choose-app-answer'
router.post("/v62/choose-app-answer", function (req, res) {
	// Make a variable and give it the value from 'pick-service'
	var whichService = req.session.data["pick-service"];

	// Check whether the variable matches a condition
	if (whichService == "settlement") {
		// Send user to next page
		res.redirect("/v62/defence-home");
	} else {
		// Send user to other page
		res.redirect("/v62/property-groups");
	}
	req.session.destroy();
});

router.post("/v62/create-new-case-route", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var createDescription = req.session.data["description"];
	var createRegValUnit = req.session.data["reg-val-units"];

	var createEconRegion = req.session.data["economic-region"];
	var createbillAuthCodes = req.session.data["bill-auth-codes"];
	var createBulkClassInd = req.session.data["bulk-class-indicator"];

	var createSubLocation = req.session.data["sub-location"];
	var createScatCode = req.session.data["scat-code"];
	var createScatSuffix = req.session.data["scat-suffix"];

	console.log(formData);
	res.redirect("create-new-case");
});

router.post("/v62/add-case-address", function (req, res) {
	console.log("Here we go...");
	console.log(req.session.data);
	// this also works as long as the variable doesn't have a - in the name
	formData.push(req.session.data);

	var caseAddress = req.session.data["case-address"];

	console.log("Case Address: " + caseAddress);

	if (req.session.data["case-address"] != " ") {
		res.redirect("add-case-task-list");
	} else {
		res.redirect("settlement-task-list");
	}
});

router.get("/v62/edit-case-clear-criteria", function (req, res) {
	req.session.destroy();
	res.redirect("/v62/edit-settlement-case");
});





////////// Edit Case /////////////

router.get("/edit-settlement-case", function (req, res) {
	res.sendFile(path.join(__dirname, "..", "/public/html/edit-settlement-case"));
});

module.exports = router;
