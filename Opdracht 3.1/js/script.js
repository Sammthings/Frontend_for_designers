var header = document.querySelector('header');
var section = document.querySelector('section:nth-of-type(1)');
var filmNumber = 1;
var requestUrl = "https://github.com/Sammthings/Frontend_for_designers/blob/master/Opdracht%203.1/js/movies.json";
var request = new XMLHttpRequest();
request.open('GET', requestUrl);
request.responseType = 'json';
request.send();


request.onload = function() {
  var pageElements = request["response"];

  for(var i = 0; i < pageElements.length; i++) {
    var article = document.createElement('article');
    var div = document.createElement('div');
    var img = document.createElement('img'); 
    var div2 = document.createElement('div');
    var title = document.createElement('h2');
    var genre = document.createElement('p');
	var date = document.createElement('p');
    var text = document.createElement('p');
    var link = document.createElement('button');
 
 	title.textContent = pageElements[i].title;
    img.src = pageElements[i].cover;
    genre.textContent = pageElements[i].genres;
    date.textContent = pageElements[i].release_date; 
	text.textContent = pageElements[i].simple_plot;
    link.textContent = 'Meer info';
    
    article.appendChild(div);
    div.appendChild(img);
    article.appendChild(div2);
    div2.appendChild(title);
	div2.appendChild(genre);
    div2.appendChild(date);
    div2.appendChild(text);
    div2.appendChild(link);

    section.appendChild(article);

    // the ID without spaces
    var carId = String(pageElements[i].title).replace(/ /g,"_");
    // button gets id
    link.setAttribute("id", carId);
    // carousel box gets special id and is added
    var carouselBox = document.createElement('div');
    carouselBox = createCarousel(carouselBox, pageElements[i].actors);
    carouselBox.setAttribute("id", "car_" + carId);
    section.appendChild(carouselBox);

    link.addEventListener("click", function() {
    	var ownId = this.id;
    	var tempSelection = document.getElementById("car_" + ownId);
    	var tempSelectDisp = tempSelection.style.display;

            tempSelection.classList.toggle('slide');     
    });

    }
}

function createCarousel(carouselBox, actors)
{
    var divActorList = document.createElement('div');
	for(var i = 0; i < actors.length; i++) {
		var sectionActeur = document.createElement('article');
        var divActorImg = document.createElement('div'); 
	    var imgActor = document.createElement('img'); 

	    var divActorInfo = document.createElement('div'); 
	    var naamActeur = document.createElement('h2');
	    var infoActeur = document.createElement('p');

	    imgActor.src = actors[i].url_photo;
	    naamActeur.textContent = actors[i].actor_name;
	    infoActeur.textContent = actors[i].character;
	    
	    divActorImg.appendChild(imgActor);

	    divActorInfo.appendChild(naamActeur);
	    divActorInfo.appendChild(infoActeur);

	    sectionActeur.appendChild(divActorImg);
	    sectionActeur.appendChild(divActorInfo);

		sectionActeur.style.display="none";

	    divActorList.appendChild(sectionActeur);

	}
    var pijlLinks = document.createElement('button');
    var pijlRechts = document.createElement('button');
    pijlLinks.textContent = '<';
    pijlRechts.textContent = '>';


    pijlLinks.addEventListener("click", function()
    {
        changeActor(divActorList, -1);
    });
    pijlRechts.addEventListener("click", function()
    {
        changeActor(divActorList, 1);
    });

    carouselBox.appendChild(divActorList);
    carouselBox.appendChild(pijlLinks);
    carouselBox.appendChild(pijlRechts);

	carouselBox.firstChild.firstChild.style.display = "block";
    carouselBox.setAttribute("class", "dropDown");
    
	return carouselBox;
}

function changeActor(list, change)
{
    
    var elements = list.childNodes;
    for (var i = 0; i < elements.length; i++)
    {
        if(elements[i].style.display == "block")
        {
            if(i + change > elements.length -1)
            {
                change = 0;
            }
            else if(i + change < 0)
            {
                change = elements.length -1;
            }
            else 
            {
                change = i + change;
            }
            elements[i].style.display = "none";
            elements[change].style.display = "block";
            break;
        } 

    }
}


