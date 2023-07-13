const UserController = (serviceContainer) => {
    const registerUser = async (req, res) => {
        try {
            await serviceContainer.userService.addUser(req.body);
            return res.status(201).json({
                success: true,
                message: `User save successfully. Here is your unique link:
                 ${process.env.BASE_URL}/dashboard?username=${req.body.username}`,
            });
        } catch (e) {
            return res.status(400).json({
                success: false,
                message: "Bad request",
            });
        }
    };

    const dashboard = async (req, res) => {
        try {
            const result =
                await serviceContainer.userService.getAllPendingAppointments(
                    req.params.username
                );
            res.status(200).json({
                success: true,
                data: result,
            });
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }
    };

    const setFreeDate = async (req, res) => {
        const username = req.params.username;
        const date = req.body.date;

        try {
            await serviceContainer.userService.setDate(username, date);
            return res.status(201).json({
                success: true,
                message: "Free date set successfully",
            });
        } catch (e) {
            return res.status(401).json({
                success: false,
                message: e.message,
            });
        }
    };

    const getAllScheduledAppointments = async (req, res) => {
        try {
            const appointments = await serviceContainer.userService.scheduledAppointments(req.params);
            res.status(200).json({
                success: true,
                data: appointments,
            });
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: error.message,
            });
        }
    };

    return {
        registerUser,
        dashboard,
        setFreeDate,
        getAllScheduledAppointments,
    };
};

module.exports = UserController;
