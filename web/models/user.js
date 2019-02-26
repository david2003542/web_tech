module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  foreName: {
		  type: Sequelize.STRING
    },
    surName: {
      type: Sequelize.STRING
    },
    userName: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    biography: {
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.DATE
    },
    status:{
      type: Sequelize.BOOLEAN
    },
	});
	
	return User;
}