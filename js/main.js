$(function(){
	window.GosterSakla = function(id){
		var elem = $('#'+id);
		var old = elem.css('visibility');
		if(old === 'hidden'){
			elem.css('visibility','visible');
			elem.css('position','relative');
		} else {
			elem.css('visibility','hidden');
			elem.css('position','absolute');
		}
	};
	
	window.navigate = function(url){
		window.location = url;
	}
});