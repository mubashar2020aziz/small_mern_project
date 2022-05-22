const mongoose = require('mongoose');
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('connection successful');
  })
  .catch((error) => {
    console.log('connection unsuccessful');
  });

// mongoose.connect('mongodb://localhost:27017/collection name')
//.then(() =>{console.log('connection on')}).catch((err)=>{console.log('err')})
