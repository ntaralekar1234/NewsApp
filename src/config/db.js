const mongoose = require('mongoose');


process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
});

//Connect to database
try {
    mongoose.connect("mongodb://localhost:27017/UserDB", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("connected to db");
} catch (error) {
    handleError(error);
}
