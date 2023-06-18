require('dotenv').config();
var express = require('express');
var router = express.Router();
var Property = require('../Models/Property');
var path = require('path');
var cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dotw5mwkx',
	api_key: '834972685861843',
	api_secret: process.env.CLOUDINARY,
});

// return all properties
router.get('/property', function (req, res, next) {
	Property.find().exec(function (err, properties) {
		res.json(properties);
	});
});

// return all properties with a certain email
router.post('/user-property', function (req, res, next) {
	Property.find({ landlord_email: req.body.email }).exec(function (err, properties) {
		res.json(properties);
	});
});

// delete a property
router.post('/delete-property', function (req, res, next) {
	Property.deleteOne({ landlord_email: req.body.email, location: req.body.location }).then(
		res.json({ success: true })
	);
});

// create a new property
router.post('/newProperty', function (req, res, next) {
	let timestamp = new Date();
	timestamp = timestamp.toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'numeric',
		year: 'numeric',
	});

	async function uploadImage() {
		return await cloudinary.uploader.upload(req.body.image);
	}

	uploadImage().then((image) => {
		var newProperty = new Property({
			landlord_email: req.body.landlord_email,
			location: req.body.location,
			description: req.body.description,
			cost_per_month: req.body.cost_per_month,
			distance: req.body.distance,
			propertyImage: image.secure_url,
			rental_term: req.body.rental_term,
			available_bedrooms: req.body.available_bedrooms,
			date_available: req.body.date_available,
			date: timestamp,
		});

		newProperty.save().then(res.json({ success: true }));
	});
});

module.exports = router;
