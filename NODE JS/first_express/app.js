var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/stu_router')
// Sequelize instance import
const { sequelize } = require('./model/First'); // Ensure path and file name is correct

// Initialize Express app
var app = express();

// 🔗 Test DB Connection
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Database Connected");
  })
  .catch((err) => console.error("❌ DB connection error:", err));

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database Connected");
  })
  .catch((err) => console.error("❌ DB connection error:", err));

// 🖼️ View Engine Setup (Jade aka Pug)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // You can change this to 'pug' or others as needed

// 📦 Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 🔁 Routes
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/studentinfo', studentRouter)
// ⚠️ 404 Error Handler
app.use(function (req, res, next) {
  next(createError(404));
});

// 🧯 Global Error Handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error'); // Make sure `views/error.jade` exists
});

// Export app for server.js or bin/www
module.exports = app;
