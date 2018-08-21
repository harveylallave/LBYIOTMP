
function displayLog(val) {
	$('#logs').val(function(index, old) { return val + old; });
}

$(document).ready(function(){

    $('#logs').on('click', function(e){
        displayLog("\n o " + new Date().toLocaleString() + " - Fall Detected \n");
    });

});
