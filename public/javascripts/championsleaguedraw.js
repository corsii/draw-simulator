$(function() {

    // Appends form to .formArea div
    $(".formArea").append("<form name='clubinsertion' action='#' method='post' id='clubinsertion'>" +
                          "</form>");

    // Appends country dropdown menu to form
    $("#clubinsertion").append("<div id = 'countryblock'" +
			       "<label>Country:</label>" +
                               "<br>" +
                               "<select name='countries' id='countries'>" +
                               "<option disabled selected> -- Choose a country -- </option>" +
                               "</select>" +
			       "<div>" +
                               "<br>");

    // Appends club dropdown menu to form
    $("#clubinsertion").append("<div id = 'clubblock'" +
			       "<label>Club:</label>" +
                               "<br>" +
                               "<select name='clubs' id='clubs'>" +
                               "</select>" +
			       "</div>" +
                               "<br>");
    
    // Appends league champion option to form
    $("#clubinsertion").append("<div id = 'leaguechampionblock'" +
			       "<label>League Champion: </label>" +
			       "<br>" +
			       "<input type='radio' name='leaguechampion' value='Yes' id='leaguechampion'>Yes</input>" +
			       "<input type='radio' name='leaguechampion' value='No' id='leaguechampion'>No</input>" +
			       "</div>" +
			       "<br>");

    // Appends champions league title holder option to form
    $("#clubinsertion").append("<div id = 'titleholderblock'" +
			       "<label>Champions League Title Holder: </label>" +
			       "<br>" +
			       "<input type='radio' name='clchampion' value='Yes' id='clchampion'>Yes</input>" +
			       "<input type='radio' name='clchampion' value='No' id='clchampion'>No</input>" +
			       "</div>" +
			       "<br>");

    // submit button for the form
    $("#clubinsertion").append("<button type='submit' id='enterbutton'>Enter Club</button>");


    $.getScript("javascripts/uefaclubs.js", function(){
	
	// adds the name of each country to the dropdown menu
	var countrymenu = $('#countries');

	$.each(countries, function(val, obj) {
            countrymenu.append($('<option></option>').val(val).html(obj.name));
	});

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
    });
    
});



