import mongoose, { Schema } from 'mongoose';

const BookingSchema: Schema = new Schema({

    amount: Number['amount'],
    date: Date['date'],
    time: String['time'],
    guestId: String['guestId'],
    id: Number['id'],

});

const Booking = mongoose.model("Booking", BookingSchema);

module.exports = Booking;