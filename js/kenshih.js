/* kenshih.js */
$(function() {
	var isSoftwareLoaded = false;

	$("#navitem-software").on("click", function() {
		console.log(this.href);
		if(!isSoftwareLoaded) {
			 $.ajax({
			  url:'html/software.html',
			  success: function(response){
			    $("#software").html(response);
				isSoftwareLoaded = true;
			  }
			});
		}
	});
});