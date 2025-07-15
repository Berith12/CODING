import {User} from '../module/User.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        console.log("User found:", user);
        // Example: destructure password and the rest from user._doc if user exists
        if (user) {
            const { password, ...rest } = user._doc;
            // Now you can use password and rest as needed
            console.log("Password:", password);
            console.log("Rest of user:", rest);

            const token = jwt.sign(
                { id: rest._id, role: rest.role },
                process.env.JWT
            );
        }
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
};