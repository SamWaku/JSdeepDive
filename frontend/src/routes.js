const express = require("express");
const router = express.Router();
const {
    index,
    signup,
    dashboard,
    setAvailability,
    scheduledAppointments,
} = require("./controllers/UserController");
const { scheduleAppointment } = require("./controllers/AppointmentController");

router.get("/", index);
router.get("/signup", signup);
router.get("/dashboard?username=username", dashboard);
router.get("/availability?username=username", setAvailability);
router.get("/appointments?username=username", scheduledAppointments);
router.get("/booking?id=userAvailabilityId", scheduleAppointment);

module.exports = router;
