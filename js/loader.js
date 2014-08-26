var loadScript = function(path){
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(path);
	s.onload = function() {
		this.parentNode.removeChild(this);
	};
	(document.head||document.documentElement).appendChild(s);
}

loadScript('js/jquery-2.1.1.min.js');
loadScript('js/main.js');