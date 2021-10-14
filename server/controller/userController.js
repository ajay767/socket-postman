const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');

function generateJWT(_id) {
  const token = jwt.sign({ _id }, process.env.JWT_SECRET);
  return token;
}

exports.login = catchAsync(async (req, res, next) => {
  const { password, userid } = req.body;

  // 1) Check if email and password exist
  if (!userid || !password) {
    return next(new AppError('Please provide user id and password!', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ user_id: userid }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect user id or password', 401));
  }

  // 3) If everything ok, send token to client
  const token = generateJWT(user._id);

  res.status(200).json({ token });
});

exports.createUser = catchAsync(async (req, res, next) => {
  console.log(res.body);
  const { email, name, profile, password, confirmPassword, user_id, chat_id } =
    req.body;

  if (!email || !user_id || !name) {
    return next(new AppError('Invalid user credientials!!'));
  }

  const user = await User.create({
    email,
    name,
    profile,
    password,
    confirmPassword,
    user_id,
    chat_id,
  });

  const token = generateJWT(user._id);
  console.log(token);
  res.status(200).json({ user, status: 'success', token });
});

exports.protect = catchAsync(async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  const userId = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(userId);

  if (!user) {
    return next(new AppError('User is unauthorized'));
  }

  req.user = user;
  next();
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = req.user;
  res.status(200).json({ user });
});
