const express = require("express");
const router = express.Router();
const ServiceContainer = require("./services");
const UserController = require("./controllers/UserController");
const AppointmentController = require("./controllers/AppointmentController");
const UserControllerHandler = UserController(ServiceContainer);
const AppointmentControllerHandler = AppointmentController(ServiceContainer);

router.post("/user/availability/:username", (req, res) =>
    UserControllerHandler.setFreeDate(req, res)
);
router.get("/user/dashboard/:username", (req, res) =>
    UserControllerHandler.dashboard(req, res)
);
router.post("/appointment/:userAvailabilityId", (req, res) =>
    AppointmentControllerHandler.bookAppointment(req, res)
);
router.get("/user/:username/appointments", (req, res) =>
    UserControllerHandler.getAllScheduledAppointments(req, res)
);
router.post("/user", (req, res) =>
    UserControllerHandler.registerUser(req, res)
);

module.exports = router;