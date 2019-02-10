const db = require('../config/mariadb.js');
const User = db.users;
 
// Post a User
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
 
// Fetch all Customers
exports.findAll = (req, res) => {
	User.findAll({
			attributes: { exclude: ["createdAt", "updatedAt"] }
		})
		.then(customers => {
			res.json(customers);
		})
		.catch(error => res.status(400).send(error))
};
 
// Find a Customer by Id
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
 
// Update a Customer
exports.update = (req, res) => {
	return User.findById(req.params.id)
		.then(
			user => {
				if(!user){
					return res.status(404).json({
						message: 'User Not Found',
					});
				}
				return customer.update({
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
 
// Delete a Customer by Id
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