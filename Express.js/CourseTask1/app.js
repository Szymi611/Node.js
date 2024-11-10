const express = require('express')

const app = express();

// TASK 2
// app.use((req, res, next) => {
//   console.log('Hello there');
//   next();
// })

// app.use((req, res, next) => {
//   console.log("What's up?");
//   next();
// })

// app.use((req, res, next) => {
//   console.log('You made it');
//   res.send('<p>Assignment nearly finished</p>');
// })

// TASK 3

app.use('/users', (req, res, next) => {
  console.log('/users middleware')
  res.send('<p>The Middleware that handles just /users</p>')
})

app.use('/', (req, res, next) => {
  console.log('/ middleware')
  res.send('<p>The Middleware that handles just / </p>')
})

app.listen(3000)