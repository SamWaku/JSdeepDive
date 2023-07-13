const UserService = require("./UserService");
const AppointmentService = require("./AppointmentService");

const ServiceContainer = () => {
    return {
        userService: UserService(),
        appointmentService: AppointmentService(),
    };
};

module.exports = ServiceContainer();
