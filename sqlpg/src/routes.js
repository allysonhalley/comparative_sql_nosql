const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
	return res.json({ node: 'With postgres is comming!' });
});

module.exports = routes;