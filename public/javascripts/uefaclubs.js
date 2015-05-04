// club of every country
var austriaclubs = ['FC Admira Wacker Mödling', 'FK Austria Wien', 'SV Grödig', 'SK Rapid Wien', 'FC Red Bull Salzburg', 'SC Rheindorf Altach', 'SV Ried', 'SK Sturm Graz', 'SC Wiener Neustadt', 'Wolfsberger AC']

var belgiumclubs = ['R.S.C. Anderlecht', 'Cercle Brugge K.S.V.', 'R. Charleroi S.C.', 'Club Brugge KV', 'K.R.C. Genk', 'K.A.A. Gent', 'K.V. Kortrijk', 'Lierse S.K.', 'K.S.C. Lokeren', 'KV Mechelen', 'Royal Mouscron-Péruwelz', 'K.V. Oostende', 'Standard Liège', 'Waasland-Beveren', 'K.V.C. Westerlo', 'S.V. Zulte Waregem'];

var denmarkclubs = ['AaB Fodbold', 'Brøndby IF', 'Esbjerg fB', 'F.C. Copenhagen', 'FC Midtjylland', 'FC Nordsjælland', 'FC Vestsjælland', 'Hobro IK', 'Odense Boldklub', 'Randers FC', 'Silkeborg IF', 'SønderjyskE'];

var englandclubs = ['Arsenal F.C.', 'Aston Villa F.C.', 'Burnley F.C.', 'Chelsea F.C.', 'Crystal Palace F.C.', 'Everton F.C.', 'Hull City A.F.C.', 'Leicester City F.C.', 'Liverpool F.C.', 'Manchester City F.C.', 'Manchester United F.C.', 'Newcastle United F.C.', 'Queens Park Rangers F.C.', 'Southampton F.C.', 'Stoke City F.C.', 'Sunderland A.F.C.', 'Swansea City A.F.C.', 'Tottenham Hotspur F.C.', 'West Bromwich Albion F.C.', 'West Ham United F.C.'];

var franceclubs = ['SC Bastia', 'FC Girondins de Bordeaux', 'Stade Malherbe Caen', 'Évian Thonon Gaillard F.C.', 'En Avant de Guingamp', 'RC Lens', 'Lille OSC', 'FC Lorient', 'Olympique Lyonnais', 'Olympique de Marseille', 'FC Metz',
'AS Monaco FC', 'Montpellier HSC', 'FC Nantes', 'OGC Nice', 'Paris Saint-Germain F.C.', 'Stade de Reims', 'Stade Rennais F.C.', 'AS Saint-Étienne', 'Toulouse FC'];

var germanyclubs = ['FC Augsburg', 'Bayer 04 Leverkusen', 'FC Bayern München', 'Borussia Dortmund', 'Borussia Mönchengladbach', 'Eintracht Frankfurt', 'SC Freiburg', 'Hamburger SV', 'Hannover 96', 'Hertha BSC', 'TSG 1899 Hoffenheim',
'1. FC Köln', '1. FSV Mainz 05', 'SC Paderborn 07', 'FC Schalke 04', 'VfB Stuttgart', 'SV Werder Bremen', 'VfL Wolfsburg'];

var italyclubs = ['Atalanta B.C.', 'Cagliari Calcio', 'A.C. Cesena', 'A.C. Chievo Verona', 'Empoli F.C.', 'ACF Fiorentina', 'Genoa C.F.C.', 'F.C. Internazionale Milano', 'Juventus F.C.', 'S.S. Lazio', 'A.C. Milan', 'S.S.C. Napoli', 'U.S. Città di Palermo', 'Parma F.C.', 'A.S. Roma', 'U.C. Sampdoria', 'U.S. Sassuolo Calcio', 'Torino F.C.', 'Udinese Calcio', 'Hellas Verona F.C.'];

var netherlandsclubs = ['ADO Den Haag', 'AFC Ajax', 'AZ Alkmaar', 'SC Cambuur', 'FC Dordrecht', 'S.B.V. Excelsior', 'Feyenoord', 'Go Ahead Eagles', 'FC Groningen', 'SC Heerenveen', 'Heracles Almelo', 'NAC Breda', 'PEC Zwolle', 'PSV Eindhoven', 'FC Twente', 'FC Utrecht', 'Vitesse', 'Willem II'];

var norwayclubs = ['Aalesunds FK', 'FK Bodø/Glimt', 'SK Brann', 'FK Haugesund', 'Lillestrøm SK', 'Molde FK', 'Odds BK', 'Rosenborg BK', 'Sandnes Ulf', 'Sarpsborg 08 FF', 'Sogndal Fotball', 'Stabæk Fotball', 'IK Start', 'Strømsgodset IF', 'Viking FK', 'Vålerenga Fotball'];

var polandclubs = ['KS Cracovia', 'GKS Bełchatów', 'Górnik Łęczna', 'Górnik Zabrze', 'Jagiellonia Białystok', 'Korona Kielce', 'Lech Poznań', 'Lechia Gdańsk', 'Legia Warsaw', 'Piast Gliwice', 'Podbeskidzie Bielsko-Biała', 'Pogoń Szczecin', 'Ruch Chorzów', 'Wisła Kraków', 'Zawisza Bydgoszcz', 'Śląsk Wrocław'];

var portugalclubs = ['Académica de Coimbra', 'F.C. Arouca', 'C.F. Os Belenenses', 'S.L. Benfica', 'Boavista F.C.', 'S.C. Braga', 'G.D. Estoril Praia', 'Gil Vicente F.C.', 'C.S. Marítimo', 'Moreirense F.C.', 'C.D. Nacional', 'F.C. Paços de Ferreira', 'F.C. Penafiel', 'FC Porto', 'Rio Ave F.C.', 'Sporting Clube de Portugal', 'Vitória de Guimarães', 'Vitória de Setúbal'];

var republicofirelandclubs = ['Athlone Town A.F.C.', 'Bohemian F.C.', 'Bray Wanderers A.F.C.', 'Cork City F.C.', 'Derry City F.C.', 'Drogheda United F.C.', 'Dundalk F.C.', 'Limerick F.C.', 'Shamrock Rovers F.C.', 'Sligo Rovers F.C.', 'St Patrick\'s Athletic F.C.', 'University College Dublin A.F.C.'];

var russiaclubs = ['FC Amkar Perm', 'FC Arsenal Tula', 'PFC CSKA Moscow', 'FC Dynamo Moscow', 'FC Krasnodar', 'FC Kuban Krasnodar', 'FC Lokomotiv Moscow', 'FC Mordovia Saransk', 'FC Rostov', 'FC Rubin Kazan', 'FC Spartak Moscow', 'FC Terek Grozny', 'FC Torpedo Moscow', 'FC Ufa', 'FC Ural Sverdlovsk Oblast', 'FC Zenit Saint Petersburg'];

var scotlandclubs = ['Aberdeen F.C.', 'Celtic F.C.', 'Dundee F.C.', 'Dundee United F.C.', 'Hamilton Academical F.C.', 'Inverness Caledonian Thistle F.C.', 'Kilmarnock F.C.', 'Motherwell F.C.', 'Partick Thistle F.C.', 'Ross County F.C.', 'St. Johnstone F.C.', 'St. Mirren F.C.'];

var spainclubs = ['UD Almería', 'Athletic Bilbao', 'Atlético Madrid', 'FC Barcelona', 'Celta de Vigo', 'Córdoba CF', 'Deportivo de La Coruña', 'SD Eibar', 'Elche CF', 'RCD Espanyol', 'Getafe CF', 'Granada CF', 'Levante UD', 'Málaga CF', 'Rayo Vallecano', 'Real Madrid C.F.', 'Real Sociedad', 'Sevilla FC', 'Valencia CF', 'Villarreal CF'];

var swedenclubs = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

var switzerlandclubs = ['', '', '', '', '', '', '', '', '', ''];

var turkeyclubs = ['', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', ''];

// countries in UEFA
var countries = [{name: "Austria", countrycoefficient: 25.675, clspots: 1, clubs: austriaclubs},
		 {name: "Belgium", countrycoefficient: 37.200, clspots: 2, clubs: belgiumclubs},
		 {name: "Denmark", countrycoefficient: 19.800, clspots: 1, clubs: denmarkclubs},
		 {name: "England", countrycoefficient: 80.391, clspots: 4, clubs: englandclubs},
		 {name: "France", countrycoefficient: 52.416, clspots: 3, clubs: franceclubs},
		 {name: "Germany", countrycoefficient: 79.129, clspots: 4, clubs: germanyclubs},
		 {name: "Italy", countrycoefficient: 69.676, clspots: 3, clubs: italyclubs},
		 {name: "Netherlands", countrycoefficient: 40.979, clspots: 2, clubs: netherlandsclubs},
		 {name: "Norway", countrycoefficient: 14.375, clspots: 1, clubs: norwayclubs},
		 {name: "Poland", countrycoefficient: 21.500, clspots: 1, clubs: polandclubs}, 
		 {name: "Portugal", countrycoefficient: 61.382, clspots: 3, clubs: portugalclubs}, 
		 {name: "Republic Of Ireland", countrycoefficient: 5.750, clspots: 1, clubs: republicofirelandclubs}, 
		 {name: "Russia", countrycoefficient: 50.498, clspots: 2, clubs: russiaclubs}, 
		 {name: "Scotland", countrycoefficient: 17.900, clspots: 1, clubs: scotlandclubs},  
		 {name: "Spain", countrycoefficient: 98.142, clspots: 4, clubs: spainclubs}];/*
		 {name: "Sweden", countrycoefficient: 17.725, clspots: 1, clubs: swedenclubs}, 
		 {name: "Switzerland", countrycoefficient: 34.375, clspots: 2, clubs: switzerlandclubs}, 
		 {name: "Turkey", countrycoefficient: 32.600, clspots: 2, clubs: turkeyclubs}];*/
