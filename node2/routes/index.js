var express = require('express');
var router = express.Router();

/* GET home page. */
var person={name:'Angela Shakya',age:19,college:'Kathford',course:'B.Sc.Csit',semester:'4th',contact:'9818313577',facebook:'https://www.facebook.com/ngla.shakya',img:'https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/15202578_1251306008259066_3215123538233920424_n.jpg?oh=b30e00ad0dbf725d40a81b46b6aab710&oe=59CB1D26'};//object creation
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',person });
});
router.get('/profile', function(req,res){
	res.render("profile",{person});
});
router.get('/add', function(req,res){
	res.render("add");
});
module.exports = router;
