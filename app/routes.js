const express = require('express')
const router = express.Router()

// const compareBillingAuth  = req.session.data['compare-billing-auth']

// Add your routes here - above the module.exports line


// Start folder specific routes
router.use("/v1", require("./views/v1/routes"))
router.use("/v2", require("./views/v2/routes"))

// var datasetID = req.session.data['dataset-id']




module.exports = router