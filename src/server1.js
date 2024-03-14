const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3002;

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

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (user) {
      res.json({ success: true, message: 'Signin successful' });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});