var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
    let user = session.auth(req).user;
    if (user.role === 'employee') {
	res.status(403).send('Access denied');
	return;
    }
	
    res.render('users/list', { title: 'Пользователи' })

});


module.exports = router;
