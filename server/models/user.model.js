const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true, // Ensure the username is unique
    trim: true, // Remove any leading or trailing spaces
    minlength: 3, // Minimum length of username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure the email is unique
    lowercase: true, // Convert email to lowercase
    validate: {
      validator: function(v) {
        // Regex for basic email validation
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: 'Please enter a valid email address',
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum password length
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role', // Reference to the Role model
    required: true, // This field is required
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Creating the model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
