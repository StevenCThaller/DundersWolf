const user = require('../controllers/user.controller.js');

module.exports = function(app) {
    app.post('/users/register', user.register);
    app.get('/users/all', user.allUsers);
}