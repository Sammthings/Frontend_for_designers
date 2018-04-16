function startRequest()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       // Action to be performed when the document is read;
	       console.log(xhttp.responseText);
	    }
	};
	xhttp.open("GET", "http://dennistel.nl/movies", true);
	xhttp.send();
}