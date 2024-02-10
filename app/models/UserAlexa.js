
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../../config/database');

const UserAlexa = sequelize.define("users_alexa", {
	id: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	email: DataTypes.STRING,
	user_id: DataTypes.STRING,
	user_id_alexa: DataTypes.STRING,
	user_id_greenn: DataTypes.STRING,
});

module.exports = UserAlexa;