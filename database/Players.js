const Sequelize = require('sequelize');
const connection = require('../database/database.js')

const Player = connection.define('players',{
	username:{
		type: Sequelize.STRING,
		allowNull: false
	},
	password:{
		type: Sequelize.STRING,
		allowNull: false
	},
	points:{
		type: Sequelize.INTEGER,
		allowNull: false
	}
});

//Category.sync({ force: true });
module.exports = Player;