var express = require('express');
var session = require('../session.js');
var router = express.Router();

router.get('/', async function(req, res, next) {
    let user = session.auth(req).user;
    
    if (user == undefined || user == null) {
	res.status(401).send('Session does not exist');
	return;
    }
	
    if (user.role === 'employee') {
	res.status(403).send('Access denied');
	return;
    }
	
    res.render('users/list', { title: 'Пользователи' });	
});


module.exports = router;
