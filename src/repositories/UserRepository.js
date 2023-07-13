const UserModel = require("../models/UserModel");
const UserAvailabilityModel = require("../models/UserAvailabilityModel");

const UserRepository = () => {
    const findUserByUsername = async (username) => {
        return UserModel.findOne({ username: username });
    };
    
    const getAllPendingUserAvailability = async (userId) => {
        return UserAvailabilityModel.find({ userId, status: "pending" });
    };
    
    const getAllPendingAvailabilityById = async (userAvailabilityId) => {
        return UserAvailabilityModel.findOne({
            _id: userAvailabilityId,
            status: "pending",
        });
    };
    
    const findUserByEmail = async (email) => {
        return UserModel.findOne({ email: email });
    };
    
    const checkAvailabilityStatus = async (date, userId, status) => {
        return UserAvailabilityModel.findOne({
            date,
            userId,
            status,
        });
    };
    
    return {
        findUserByUsername,
        getAllPendingUserAvailability,
        getAllPendingAvailabilityById,
        findUserByEmail,
        checkAvailabilityStatus,
    };
};
module.exports = UserRepository();
