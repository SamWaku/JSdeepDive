const mongoose = require("mongoose");

const UserAvailabilitySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    userAvailabilityId: {
        type: mongoose.Schema.Types.ObjectId,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "booked"],
        default: "pending",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("UserAvailability", UserAvailabilitySchema);
