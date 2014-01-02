/* kenshih.js */
$(function() {
	var lazyLoadMap = { 
		software: { 
			isLoaded: false,
			url: 'html/software.html' 
		},
		investigations: { 
			isLoaded: false,
			url: 'desiderata/ecosystem1.html' 
		},
		drawing: { 
			isLoaded: false,
			url: 'html/drawing.html' 
		}
	};

	//enable load of html by naming conventions on:
	// a) enabling menu item "navitem-$key"
	// b) html filename $key.html
	// c) tab name: $key
	function getfilefn(key) {
		return function() {
			if(!lazyLoadMap[key].isLoaded) {
				$.ajax({
					url: lazyLoadMap[key].url,
					success: function(response){
						$("#" + key).html(response);
						lazyLoadMap[key].isLoaded = true;
					}
				});
			}
		};
	}
	
	for (key in lazyLoadMap) {
		//console.log(key);
		$("#navitem-" + key).on("click", getfilefn(key));
	}

});