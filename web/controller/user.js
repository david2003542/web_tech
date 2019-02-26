const models = require("../models")
<<<<<<< HEAD
const User = models.User;
 
=======
const User = models.user;

// console.log(User)
>>>>>>> d77fc9fde4bb3985b2289ff92bd6759ff6ec1f46
// // Post a User
exports.create = (req, res) => {	
	// Save to MariaDB database
	User.create({  
      foreName: req.body.foreName,
      surName: req.body.surName,
      userName: req.body.userName,
      password: req.body.password,
      biography: req.body.biography,
      birth: req.body.birth,
      status: req.body.status
		})
		.then(user => {		
			// Send created customer to client
			res.json(user);
		})
		.catch(error => res.status(400).send(error))
};
 
// Fetch all Users
exports.findAll = (req, res) => {
	User.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(users => {
			res.json(users);
		})
		.catch(error => res.status(400).send(error))
};
 
// Find a User by Id
exports.findById = (req, res) => {	
	User.findById(req.params.id,
				{attributes: { exclude: ["createdAt", "updatedAt"] }}
			)
			.then(user => {
					if (!user){
						return res.status(404).json({message: "User Not Found"})
					}
					return res.status(200).json(user)
				}
			)
			.catch(error => res.status(400).send(error));
};
 
// Update a User
exports.update = (req, res) => {
	return User.findById(req.params.id)
		.then(
			user => {
				if(!user){
					return res.status(404).json({
						message: 'User Not Found',
					});
				}
				return user.update({
                    foreName: req.body.foreName,
                    surName: req.body.surName,
                    biography: req.body.biography,
                    birth: req.body.birth,
                    status: req.body.status
									})
									.then(() => res.status(200).json(user))
									.catch((error) => res.status(400).send(error));
				}
			)
		.catch((error) => res.status(400).send(error));			 
};
 
// Delete a User by Id
exports.delete = (req, res) => {
	return User
			.findById(req.params.id)
			.then(user => {
				if(!user) {
					return res.status(400).send({
						message: 'User Not Found',
					});
				}

				return user.destroy()
												.then(() => res.status(200).json({message: "Destroy successfully!"}))
												.catch(error => res.status(400).send(error));
			})
			.catch(error => res.status(400).send(error));
};