var express = require('express');
var router = express.Router();

// champions league clubs
var clubs = [];
// countries in UEFA
var countries = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "England", "Estonia", "Faroe Islands", "Finland", "France", "Georgia", "Germany", "Gibraltar", "Greece", "Hungary", "Iceland", "Israel", "Italy", "Kazakhstan", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta", "Moldova", "Montenegro", "Netherlands", "Northern Ireland", "Norway", "Poland", "Portugal", "Republic Of Ireland", "Romania", "Russia", "San Marino", "Scotland", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "Wales"]

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Champions League Draw', items: countries });
});

/* POST add page. */
router.post('/add', function(req, res) {

    var i;  
    var obj = { name: req.body.name,
	      country: req.body.countries,
	      city: req.body.city,
	      clubcoefficient: req.body.clubcoefficient,
	      countrycoefficient: req.body.countrycoefficient,
	      leaguechampion: req.body.leaguechampion,
	      clwinner: req.body.clwinner};

    /*if (clubs.length = 0) {
	clubs.push(obj);
    } else {
	for (i = 0; i < clubs.length; i++) {
	    if (obj.clwinner === clubs[i].clwinner) {
		break;
            }
	}
	res.redirect("/?error=Can't add club");
    }*/
    
    clubs.push(obj);
    res.render('add', {title: 'Club just added', item: obj});
});

/* GET list page */
router.get('/list', function(req, res) {
  res.render('list', {title: 'List of clubs in UEFA Champions League', items: clubs});
});

module.exports = router;
