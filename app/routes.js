const express = require('express')
const router = express.Router()

const formData = []

// const compareBillingAuth  = req.session.data['compare-billing-auth']

// Add your routes here - above the module.exports line


// Start folder specific routes
router.use("/v1", require("./views/v1/_routes"))
router.use("/v2", require("./views/v2/_routes"))


//Create dataset route
router.post('/v2/create-new-dataset-route', function (req, res) {
  console.log('Here we go...');
  console.log(req.session.data);
  // this also works as long as the variable doesn't have a - in the name
  formData.push(req.session.data);

  var datasetId = req.session.data['dataset-id'];
  console.log("Your new " + datasetId);

  console.log(datasetId);

  console.log(formData);

   res.redirect("create-new-dataset");
	
})

router.post('/v2/defence-home-add-row', function (req, res) {

  console.log('res');
  console.log(req.session.data);
  // this also works as long as the variable doesn't have a - in the name
  formData.push(req.session.data);
  res.render("defence-home", {
    results:formData
  });

})

 
module.exports = router



//router.post("create-new-dataset-answers", function (req, res) {
	// Make a variable and give it the value from 'how-many-balls'
  // var datasetId = req.session.data['dataset-id'];
  // var matrixRef = req.session.data['matrix-ref'];
  // var chalCaseNum = req.session.data['cca-ref'];
  // var cbdCaseNum = req.session.data['cbd-case-num'];
  // var subLocation = req.session.data['sub-location'];
  // var textFile = req.session.data['text-file-type']; 
  //res.redirect("");
	
//});