var express = require('express');
var router = express.Router();
var Property = require('../Models/Property');

router.get('/property', function (req, res, next) {
	Property.find().exec(function (err, properties) {
		res.json(properties);
	});
});

router.post('/property', function (req, res, next) {
	var newProperty = new Property({
		location: req.body.location,
		description: req.body.description,
		cost_per_month: req.body.cost_per_month,
		distance: req.body.distance,
		propertyImage: 'image url',
		date: req.body.date,
	});
	newProperty.save(function (err) {
		res.json({ success: true });
	});
});

module.exports = router;
