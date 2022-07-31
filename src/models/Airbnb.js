const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AirbnbSchema = new Schema({
    name: String,
    neighbourhood: String,
    minimum_nights: Number,
    latitude: Number,
    id: Number,
    room_type: String,
    host_id: Number,
    host_name: String,
    neighbourhood_group: String,
    longitude: Number,
    price: Number,
    number_of_reviews: Number,
    last_review: String,
    reviews_per_month: Number
});

const Airbnb = mongoose.model('airbnb', AirbnbSchema);

module.exports = Airbnb;
