var express = require('express');
var router = express.Router();
var Property = require('../Models/Property');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, './uploads'));
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

var upload = multer({ storage: storage });

router.get('/property', function (req, res, next) {
	Property.find().exec(function (err, properties) {
		res.json(properties);
	});
});

router.post('/property', upload.single('propertyImage'), function (req, res, next) {
	var newProperty = new Property({
		location: req.body.location,
		description: req.body.description,
		cost_per_month: req.body.cost_per_month,
		distance: req.body.distance,
		propertyImage: req.file.path,
		date: req.body.date,
	});
	newProperty.save(function (err) {
		res.json({ success: true });
	});
});

module.exports = router;
