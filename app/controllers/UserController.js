const User = require('../models/User');
const UserAlexa = require('../models/UserAlexa');

exports.getUsers = (req, res, next) => {
	User.findAll().then(users => {
        res.json(users);
	})
	.catch(err => console.log(err));
};

exports.registerUser = (req, res, next) => {
	
};