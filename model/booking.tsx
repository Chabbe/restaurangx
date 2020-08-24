import mongoose, { Schema } from 'mongoose';

const BookingSchema: Schema = new Schema({

    amount: Number,
    date: Date,
    time: String,
    guestId: String,
    id: Number,

});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;