const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const charSchema = new Schema({
    id: Number,
    name: String,
    status: String,
    species: String,
    type: String,
    gender: String,
    origin: String,
    image: String,
});

module.exports = mongoose.model("chars", charSchema);