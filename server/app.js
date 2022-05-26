const dotenv = require('dotenv').config({ path: './.env' });
const express = require('express');

const app = express();
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;
require('./database/connect');
const User = require('./models/userSchema');

//route
const userRoute = require('./router/auth');
app.use('/api/user', userRoute);

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.listen(port, () => {
  console.log('start server:' + port);
});
