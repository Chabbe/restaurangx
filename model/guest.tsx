import mongoose, { Schema } from 'mongoose';

const GuestSchema: Schema = new Schema({

    firstname: String,
    lastname: String,
    email: String,
    phoneNr: Number,
    id: Number,

});

const Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;