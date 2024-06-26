import USER from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//signup
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new USER({
      firstName,
      lastName,
      email,
      password: hashPassword,
      picturePath,
      friends,
      location,
      occupation,
      viewdProfile: Math.floor(Math.random() * 10000),
      impression: Math.floor(Math.random() * 10000),
    });
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//signin
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await USER.findOne({ email: email });
    if (!user) {
      res.status(400).json({ message: "User does not exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid Credential" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

export default register;
