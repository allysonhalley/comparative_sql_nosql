const express = require('express')

const User = require('../models/User');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const users = await User.find();

		return res.send({ users });		
	} catch ( err ) {
		return res.status(400).send({ error: 'No results!' });
	}
});

router.post('/register', async (req, res) => {
	try {
		const user = await User.create(req.body);

		return res.send({ user });		
	} catch ( err ) {
		return res.status(400).send({ error: 'Registration failed' });
	}
});



module.exports = app => app.use('/', router);