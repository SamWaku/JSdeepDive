const AppointmentController = (serviceContainer) => {
    const bookAppointment = async (req, res) => {
        const {
            userAvailabilityId
        } = req.params;

        try {
            const response = await serviceContainer.appointmentService.bookAppointment(
                userAvailabilityId,
                req.body
            );
            return res.status(201).json({
                success: true,
                message: response,
            });
        } catch (e) {
            return res.status(401).json({
                success: false,
                message: e.message,
            });
        }
    }
    return {
        bookAppointment
    }
};

module.exports = AppointmentController