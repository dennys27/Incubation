var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser'); 
var logger = require('morgan');
var cors = require("cors");

var users = require("./routes/routes");
const connection  = require('./connection/db')
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//database connection
connection()


app.use('/',users); 
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 
app.use(function(err, req, res, next) { 
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
