var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
	landlord_email: { type: String, required: true },
	location: { type: String, required: true },
	description: { type: String, required: true },
	cost_per_month: { type: Number, required: true },
	distance: { type: Number, required: true },
	propertyImage: [{ type: String, required: true }],
	rental_term: { type: String, required: true },
	available_bedrooms: { type: Number, required: true },
	date_available: { type: Date, required: true },
	date: { type: String, required: true },
});

module.exports = mongoose.model('PropertyListings', PropertySchema);
