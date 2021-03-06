var createError = require('http-errors');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var testAPIROUTER = require('./routes/testAPI');
var indexRouter = require('./routes/index');
var cors = require('cors');
var app = express();

const schema = require("./middleware/graphql")


// view engine setup
app.engine('pug', require('pug').__express)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/testAPI', testAPIROUTER);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: { hello: () => 'Hello world!' },
  graphiql: true,
}));
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
  res.render('error');
});

module.exports = app;
