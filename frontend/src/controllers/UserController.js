const index = (req, res) => {
    res.render('/index');
}

const signup = (req, res) => {
    res.render('/signup');
}

const dashboard = (req, res) => {
    res.render('/dashboard');
}

const setAvailability = (req, res) => {
    res.render('/availability');
}

const scheduledAppointments = (req, res) => {
    res.render('/appointments');
}

module.exports = {
    index,
    signup,
    dashboard,
    setAvailability,
    scheduledAppointments
}