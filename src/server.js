const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB Atlas
const mongoURI = 'mongodb+srv://nitinchowdary2003:nitin2003@cluster0.z83jqhw.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB Atlas with increased timeout
mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000, // Increase the server selection timeout to 5 seconds
  socketTimeoutMS: 45000, // Increase the socket timeout to 45 seconds
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});


// Create a MongoDB schema and model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());
// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new user
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('MongoDB Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
