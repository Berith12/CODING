import bcrypt from 'bcryptjs';
import {User} from '../module/User.js';

export const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if (
            firstName == "" ||
            lastName == "" ||
            email == "" ||
            password == ""
        ) {
            return res.status(400).send("please fill all the fields");
        }

        const alreadyExists = await User.findOne({ email });
        if (alreadyExists) {
            return res
                .status(400)
                .json({ message: "User with this email already exists" });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const userResponse = newUser.toObject();
        delete userResponse.password;

        res.status(201).json({
            message: "User created successfully",
            user: userResponse,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};