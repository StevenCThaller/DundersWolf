const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/werewolf_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("DB Connection Established"))
    .catch(err => console.log("Failed to connect to DB"));