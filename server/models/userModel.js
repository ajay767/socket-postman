const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: String,
    user_id: {
      type: String,
      unique: true,
      required: [true, 'user_id is required.'],
    },
    chat_id: {
      type: String,
      unique: true,
      required: [true, 'chat_id is required.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      select: false,
    },
    confirmPassword: {
      type: String,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'Password Mismatch!',
      },
    },
    profile: String,
    quote: {
      type: String,
      default: 'Busy',
    },
    active: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
    },
    lastSeen: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

userSchema.index({ name: 'text', email: 'text', user_id: 'text' });

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
