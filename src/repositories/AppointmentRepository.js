const AppointmentModel = require("../models/AppointmentModel");

const AppointmentRepository = () => {
    const getUserScheduledAppointments = async (userId) => {
        return AppointmentModel.find({
            userId: userId,
        }).populate("userAvailabilityId", "date");
    }
    
    return {
        getUserScheduledAppointments
    };
};

module.exports = AppointmentRepository();
