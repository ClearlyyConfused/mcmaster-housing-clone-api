var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = {
	landlord_name: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, required: true },
	cost_per_month: { type: Number, required: true },
	distance: { type: Number, required: true },
	propertyImage: { type: String, required: true },
	date: { type: String, required: true },
};

module.exports = mongoose.model('PropertyListings', PropertySchema);
