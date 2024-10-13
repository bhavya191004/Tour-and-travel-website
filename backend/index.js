import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import User from './models/User.js'; // Import the User model

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/signupDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
