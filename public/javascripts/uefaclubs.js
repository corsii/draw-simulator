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
var countries = [{name: "Austria", countrycoefficient: 25.675, clspots: 1, clubs: austria},
		 {name: "Belgium", countrycoefficient: 37.200, clspots: 2, clubs: belgium},
		 {name: "Denmark", countrycoefficient: 19.800, clspots: 1, clubs: denmark},
		 {name: "England", countrycoefficient: 80.391, clspots: 4, clubs: england},
		 {name: "France", countrycoefficient: 52.416, clspots: 3, clubs: france},
		 {name: "Germany", countrycoefficient: 79.129, clspots: 4, clubs: germany},
		 {name: "Italy", countrycoefficient: 69.676, clspots: 3, clubs: italy},
		 {name: "Netherlands", countrycoefficient: 40.979, clspots: 2, clubs: netherlands},
		 {name: "Norway", countrycoefficient: 14.375, clspots: 1, clubs: norway},
		 {name: "Poland", countrycoefficient: 21.500, clspots: 1, clubs: poland}, 
		 {name: "Portugal", countrycoefficient: 61.382, clspots: 3, clubs: portugal}, 
		 {name: "Republic Of Ireland", countrycoefficient: 5.750, clspots: 1, clubs: republic_of_ireland}, 
		 {name: "Russia", countrycoefficient: 50.498, clspots: 2, clubs: russia}, 
		 {name: "Scotland", countrycoefficient: 17.900, clspots: 1, clubs: scotland}, 
		 {name: "Spain", countrycoefficient: 98.142, clspots: 4, clubs: spain}, 
		 {name: "Sweden", countrycoefficient: 17.725, clspots: 1, clubs: sweden}, 
		 {name: "Switzerland", countrycoefficient: 34.375, clspots: 2, clubs: switzerland}, 
		 {name: "Turkey", countrycoefficient: 32.600, clspots: 2, clubs: turkey}];
