(function(){
	/*

		CSS - Vanilla JavaScript for jQuery-like CSS
		Made by Aaron Sherrill 

		$('.classname').css({paddingTop: '100px'});
		//...becomes...
		css('.classname', {paddingTop: '100px'});

	*/
	css = function(querystring, props){

		var elems = document.querySelectorAll(querystring);
		
		function styleElement(elem, vals){
			for(var i in vals){
				elem.style[i] = vals[i]; 
			}
		}


		if(elems.length > 1){
			for(var j in elems){
				if(elems[j].nodeType === 1){
						styleElement(elems[j], props); 
					}
				}
		}else{
			if(elems[0].nodeType === 1){
				styleElement(elems[0], props);
			}
		}
		
	};
})();

