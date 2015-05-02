var express = require('express');
var router = express.Router();

// champions league clubs
var clubs = [];

// club of every country
var austria = ['FC Admira Wacker Mödling', 'FK Austria Wien', 'SV Grödig', 'SK Rapid Wien', 'FC Red Bull Salzburg', 'SC Rheindorf Altach', 'SV Ried', 'SK Sturm Graz', 'SC Wiener Neustadt', 'Wolfsberger AC']

var belgium = ['R.S.C. Anderlecht', 'Cercle Brugge K.S.V.', 'R. Charleroi S.C.', 'Club Brugge KV', 'K.R.C. Genk', 'K.A.A. Gent', 'K.V. Kortrijk', 'Lierse S.K.', 'K.S.C. Lokeren', 'KV Mechelen', 'Royal Mouscron-Péruwelz', 'K.V. Oostende', 'Standard Liège', 'Waasland-Beveren', 'K.V.C. Westerlo', 'S.V. Zulte Waregem'];

var denmark = ['AaB Fodbold', 'Brøndby IF', 'Esbjerg fB', 'F.C. Copenhagen', 'FC Midtjylland', 'FC Nordsjælland',
	       'FC Vestsjælland', 'Hobro IK', 'Odense Boldklub', 'Randers FC', 'Silkeborg IF', 'SønderjyskE'];

var england = ['Arsenal F.C.', 'Aston Villa F.C.', 'Burnley F.C.', 'Chelsea F.C.', 'Crystal Palace F.C.', 'Everton F.C.', 'Hull City A.F.C.', 'Leicester City F.C.', 'Liverpool F.C.', 'Manchester City F.C.', 'Manchester United F.C.', 'Newcastle United F.C.', 'Queens Park Rangers F.C.', 'Southampton F.C.', 'Stoke City F.C.', 'Sunderland A.F.C.', 'Swansea City A.F.C.', 'Tottenham Hotspur F.C.', 'West Bromwich Albion F.C.', 'West Ham United F.C.'];

var france = ['SC Bastia', 'FC Girondins de Bordeaux', 'Stade Malherbe Caen', 'Évian Thonon Gaillard F.C.', 'En Avant de Guingamp', 'RC Lens', 'Lille OSC', 'FC Lorient', 'Olympique Lyonnais', 'Olympique de Marseille', 'FC Metz',
'AS Monaco FC', 'Montpellier HSC', 'FC Nantes', 'OGC Nice', 'Paris Saint-Germain F.C.', 'Stade de Reims', 'Stade Rennais F.C.', 'AS Saint-Étienne', 'Toulouse FC'];

var germany = ['FC Augsburg', 'Bayer 04 Leverkusen', 'FC Bayern München', 'Borussia Dortmund', 'Borussia Mönchengladbach', 'Eintracht Frankfurt', 'SC Freiburg', 'Hamburger SV', 'Hannover 96', 'Hertha BSC', 'TSG 1899 Hoffenheim',
'1. FC Köln', '1. FSV Mainz 05', 'SC Paderborn 07', 'FC Schalke 04', 'VfB Stuttgart', 'SV Werder Bremen', 'VfL Wolfsburg'];

var italy = ['Atalanta B.C.', 'Cagliari Calcio', 'A.C. Cesena', 'A.C. Chievo Verona', 'Empoli F.C.', 'ACF Fiorentina', 'Genoa C.F.C.', 'F.C. Internazionale Milano', 'Juventus F.C.', 'S.S. Lazio', 'A.C. Milan', 'S.S.C. Napoli', 'U.S. Città di Palermo', 'Parma F.C.', 'A.S. Roma', 'U.C. Sampdoria', 'U.S. Sassuolo Calcio', 'Torino F.C.', 'Udinese Calcio', 'Hellas Verona F.C.'];

var netherlands = ['ADO Den Haag', 'AFC Ajax', 'AZ Alkmaar', 'SC Cambuur', 'FC Dordrecht', 'S.B.V. Excelsior', 'Feyenoord', 'Go Ahead Eagles', 'FC Groningen', 'SC Heerenveen', 'Heracles Almelo', 'NAC Breda', 'PEC Zwolle', 'PSV Eindhoven', 'FC Twente', 'FC Utrecht', 'Vitesse', 'Willem II'];

var norway = ['Aalesunds FK', 'FK Bodø/Glimt', 'SK Brann', 'FK Haugesund', 'Lillestrøm SK', 'Molde FK', 'Odds BK', 'Rosenborg BK', 'Sandnes Ulf', 'Sarpsborg 08 FF', 'Sogndal Fotball', 'Stabæk Fotball', 'IK Start', 'Strømsgodset IF', 'Viking FK', 'Vålerenga Fotball'];

var poland = ['', '', '', '', '', '', '', '',
	      '', '', '', '', '', '', '', ''];

var portugal = ['', '', '', '', '', '', '', '', '',
		'', '', '', '', '', '', '', '', ''];

var republic_of_ireland = ['', '', '', '', '', '',
			   '', '', '', '', '', ''];

var russia = ['', '', '', '', '', '', '', '',
	      '', '', '', '', '', '', '', ''];

var scotland = ['', '', '', '', '', '',
	        '', '', '', '', '', ''];

var spain = ['', '', '', '', '', '', '', '', '', '',
	     '', '', '', '', '', '', '', '', '', ''];

var sweden = ['', '', '', '', '', '', '', '',
	      '', '', '', '', '', '', '', ''];

var switzerland = ['', '', '', '', '',
	           '', '', '', '', ''];

var turkey = ['', '', '', '', '', '', '', '', '',
	      '', '', '', '', '', '', '', '', ''];

// countries in UEFA
var countries = [{name: "Austria", clubs: austria}, {name: "Belgium", clubs: belgium}, {name: "Denmark", clubs: denmark}, {name: "England", clubs: england}, {name: "France", clubs: france}, {name: "Germany", clubs: germany}, {name: "Italy", clubs: italy}, {name: "Netherlands", clubs: netherlands}, {name: "Norway", clubs: norway}];/*, {name: "Poland", clubs: []}, {name: "Portugal", clubs: []}, {name: "Republic Of Ireland", clubs: []}, {name: "Russia", clubs: []}, {name: "Scotland", clubs: []}, {name: "Spain", clubs: []}, {name: "Sweden", clubs: []}, {name: "Switzerland", clubs: []}, {name: "Turkey", clubs: []}]*/

/* GET home page. */
router.get('/', function(req, res, next) {

    var countrynames = [];
    var clublist = [];

    for (var i = 0; i < countries.length; i++) {
	countrynames.push(countries[i].name);
    }

    var selectedclub = req.body.countries;

    for (var j = 0; j < countries.length; j++) {
	if (selectedclub === countries[j].name) {
	    clublist = countries[j].clubs;
	    break;
	}
    }
    
	res.render('index', { title: 'Champions League Draw', items: countrynames, list: clublist });
});

/* POST add page. */
router.post('/add', function(req, res) {

    var i;  
    var obj = { name: req.body.name,
	      	country: req.body.countries,
	      	leaguechampion: req.body.leaguechampion,
	      	clwinner: req.body.clwinner};

    clubs.push(obj);
    res.render('add', {title: 'Club just added', item: obj});
});

/* GET list page */
router.get('/list', function(req, res) {
  res.render('list', {title: 'List of clubs in UEFA Champions League', items: clubs});
});

module.exports = router;
