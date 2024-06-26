const mongoose = require('mongoose');

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      default: 2,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true },
);
const Auth = mongoose.model('Auth', authSchema);
module.exports = Auth;
