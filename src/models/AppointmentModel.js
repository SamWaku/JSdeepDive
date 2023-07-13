const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    userAvailabilityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAvailability",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
