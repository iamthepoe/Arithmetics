const Sequelize = require('sequelize');

const connection = new Sequelize('arithmetics', 'root', '12345', {
	host:'localhost',
	dialect: 'mysql',
	timezone: "-03:00"
});


module.exports = connection;