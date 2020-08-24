import mongoose, { Schema } from 'mongoose';

const GuestSchema: Schema = new Schema({

    firstname: String['firstName'],
    lastname: String['lastName'],
    email: String['emailName'],
    phoneNr: Number['phoneNr'],
    id: Number['id'],

});

const Guest = mongoose.model("Guest", GuestSchema);

module.exports = Guest;