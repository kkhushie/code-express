const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  roleId: {
    type: String,
    required: true,
    unique: true, // Ensure that each role has a unique ID
  },
  roleName: {
    type: String,
    required: true,
    enum: ['Student', 'Faculty'], // Possible roles
  },
});

const Role = mongoose.model('Role', roleSchema);  // Register the schema

module.exports = Role;
