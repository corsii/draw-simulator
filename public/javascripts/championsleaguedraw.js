// club of everythe 5 countries country
var englandclubs = ['Arsenal F.C.', 'Aston Villa F.C.', 'Burnley F.C.', 'Chelsea F.C.', 'Crystal Palace F.C.', 'Everton F.C.', 'Hull City A.F.C.', 'Leicester City F.C.', 'Liverpool F.C.', 'Manchester City F.C.', 'Manchester United F.C.', 'Newcastle United F.C.', 'Queens Park Rangers F.C.', 'Southampton F.C.', 'Stoke City F.C.', 'Sunderland A.F.C.', 'Swansea City A.F.C.', 'Tottenham Hotspur F.C.', 'West Bromwich Albion F.C.', 'West Ham United F.C.'];

var franceclubs = ['SC Bastia', 'FC Girondins de Bordeaux', 'Stade Malherbe Caen', 'Évian Thonon Gaillard F.C.', 'En Avant de Guingamp', 'RC Lens', 'Lille OSC', 'FC Lorient', 'Olympique Lyonnais', 'Olympique de Marseille', 'FC Metz', 'AS Monaco FC', 'Montpellier HSC', 'FC Nantes', 'OGC Nice', 'Paris Saint-Germain F.C.', 'Stade de Reims', 'Stade Rennais F.C.', 'AS Saint-Étienne', 'Toulouse FC'];

var germanyclubs = ['FC Augsburg', 'Bayer 04 Leverkusen', 'FC Bayern München', 'Borussia Dortmund', 'Borussia Mönchengladbach', 'Eintracht Frankfurt', 'SC Freiburg', 'Hamburger SV', 'Hannover 96', 'Hertha BSC', 'TSG 1899 Hoffenheim', '1. FC Köln', '1. FSV Mainz 05', 'SC Paderborn 07', 'FC Schalke 04', 'VfB Stuttgart', 'SV Werder Bremen', 'VfL Wolfsburg'];

var italyclubs = ['Atalanta B.C.', 'Cagliari Calcio', 'A.C. Cesena', 'A.C. Chievo Verona', 'Empoli F.C.', 'ACF Fiorentina', 'Genoa C.F.C.', 'F.C. Internazionale Milano', 'Juventus F.C.', 'S.S. Lazio', 'A.C. Milan', 'S.S.C. Napoli', 'U.S. Città di Palermo', 'Parma F.C.', 'A.S. Roma', 'U.C. Sampdoria', 'U.S. Sassuolo Calcio', 'Torino F.C.', 'Udinese Calcio', 'Hellas Verona F.C.'];

var netherlandsclubs = ['ADO Den Haag', 'AFC Ajax', 'AZ Alkmaar', 'SC Cambuur', 'FC Dordrecht', 'S.B.V. Excelsior', 'Feyenoord', 'Go Ahead Eagles', 'FC Groningen', 'SC Heerenveen', 'Heracles Almelo', 'NAC Breda', 'PEC Zwolle', 'PSV Eindhoven', 'FC Twente', 'FC Utrecht', 'Vitesse', 'Willem II'];

var spainclubs = ['UD Almería', 'Athletic Bilbao', 'Atlético Madrid', 'FC Barcelona', 'Celta de Vigo', 'Córdoba CF', 'Deportivo de La Coruña', 'SD Eibar', 'Elche CF', 'RCD Espanyol', 'Getafe CF', 'Granada CF', 'Levante UD', 'Málaga CF', 'Rayo Vallecano', 'Real Madrid C.F.', 'Real Sociedad', 'Sevilla FC', 'Valencia CF', 'Villarreal CF'];

// countries in UEFA
var countries = [{name: "England", countrycoefficient: 80.391, clspots: 4, clubs: englandclubs},
		 {name: "France", countrycoefficient: 52.416, clspots: 3, clubs: franceclubs},
		 {name: "Germany", countrycoefficient: 79.129, clspots: 4, clubs: germanyclubs},
		 {name: "Italy", countrycoefficient: 69.676, clspots: 3, clubs: italyclubs},
		 {name: "Netherlands", countrycoefficient: 40.979, clspots: 2, clubs: netherlandsclubs},
		 {name: "Spain", countrycoefficient: 98.142, clspots: 4, clubs: spainclubs}];

$(function() {

    $(".formArea").append("<form name='clubinsertion' action='#' method='post' id='clubinsertion'>" +
                          "</form>");
    $("#clubinsertion").append("<label>Country:</label>" +
                               "<br>" +
                               "<select name='countries' id='countries'>" +
                               "<option disabled selected> -- Choose a country -- </option>" +
                               "</select>" +
                               "<br>");

    // adds the name of each country to the dropdown menu
    var countrymenu = $('#countries');

    $.each(countries, function(val, obj) {
        countrymenu.append($('<option></option>').val(val).html(obj.name));
    });

    $("#clubinsertion").append("<label>Club:</label>" +
                               "<br>" +
                               "<select name='clubs' id='clubs'>" +
                               "</select>" +
                               "<br>");

    // adds each club of selected country into the clubs dropdown menu
    var clubmenu = $('#clubs');
    
    countrymenu.on('change', function(){
        var selectedcountry =$(this).find(":selected").text();
        clubmenu.find('option').remove();
        
        for (var i = 0; i < countries.length; i++) {
            if (selectedcountry === countries[i].name) {
                $.each(countries[i].clubs, function(key, value) {
                    clubmenu.append($("<option></option>").text(value));
                });
            }
        }
    });

    $("#clubinsertion").append("<label>League Champion: </label>" +
			       "<br>" +
			       "<input type='radio' name='leaguechampion' value='Yes' id='leaguechampion'>Yes</input>" +
			       "<input type='radio' name='leaguechampion' value='No' id='leaguechampion'>No</input>" +
			       "<br>");
    
    $("#clubinsertion").append("<label>Champions League Title Holder: </label>" +
			       "<br>" +
			       "<input type='radio' name='clchampion' value='Yes' id='clchampion'>Yes</input>" +
			       "<input type='radio' name='clchampion' value='No' id='clchampion'>No</input>" +
			       "<br>");

    // submit button for the form
    $("#clubinsertion").append("<button type='submit'>Enter Club</button>");
});



