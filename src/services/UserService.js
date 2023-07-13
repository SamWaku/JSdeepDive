const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const UserRepository = require("../repositories/UserRepository");
const AppointmentRepository = require("../repositories/AppointmentRepository");

const UserService = () => {
    const addUser = async (postRequestData) => {
        const { email } = postRequestData;
        // check if user already exists in the data base
        const userExists = await UserRepository.findUserByEmail(email);
        if (userExists) {
            throw new Error("User already exists");
        }
        let newUser = new UserModel(postRequestData);
        await newUser.save();
    };

    const setDate = async (username, date) => {
        const user = await UserRepository.findUserByUsername(username);
        if (!user) {
            throw new Error("Cannot perform this request");
        }

        const checkIfRecordExists = await UserRepository.checkAvailabilityStatus(
            date,
            user._id,
            "pending"
        );

        if (checkIfRecordExists) {
            throw new Error(
                "You can't set date twice in a day as your current date status is still pending"
            );
        }

        let newDate = new UserAvailabilityModel({
            date: date,
            userId: user._id,
        });
        await newDate.save();
    };

    const getAllPendingAppointments = async (username) => {
        const user = await UserRepository.findUserByUsername(username);
        if (!user) {
            throw new Error("Cannot perform this request");
        }

        return await UserRepository.getAllPendingUserAvailability(user._id);
    };

    const scheduledAppointments = async (params) => {
        const { username } = params;

        // check if the user exists in the database
        const user = await UserRepository.findUserByUsername(username);

        // if user does not exist in the database throw new error
        if (!user) {
            throw new Error("User is not available");
        }

        // Getting all the scheduledAppointments of the user
        const appointments = await AppointmentRepository.getUserScheduledAppointments(
            user._id
        );

        // if there are no scheduled appointments for the user throw an error
        if (!appointments) {
            throw new Error("No scheduled appointments for this user");
        }

        return appointments;
    };

    return {
        addUser,
        setDate,
        getAllPendingAppointments,
        scheduledAppointments,
    };
};

module.exports = UserService;
