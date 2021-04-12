
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
var bottone_media = document.getElementById("media");

for (let elem of cityElems ) {
  elem.onclick = () => display(elem.innerHTML);
}
bottone_media.onclick = display_avg;
///////////////////////////////////
function display_avg (){
  var media = 0;
  for(let cit of cityElems){
    let data = cit.innerHTML;
    let request = new XMLHttpRequest();
    request.onload = function(){
      if(request.status == 200){
        var dataObject = JSON.parse(request.response);
        var temp = dataObject.main.temp;
        media += temp / cityElems.length;
        document.getElementById("risposta_media").innerHTML = 
        "la media è di " + media + "gradi";
      }else{
        document.getElementById("risposta_media").innerHTML = "errore";
      }
    };
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
    data,true);
    request.send();
  }
}
var cityElems = document.getElementsByClassName("città");
for (let elem of cityElems ) {
  //definisco una funzione arraow come proprieta del DOM
  elem.onclick = () => display(elem.innerHTML);
}

// Funzione collegata ai bottoni
// "window" necessario in StackBlitz, può essere
// omesso altrimenti

function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById("risposta").innerHTML =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi";
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };

//AJAX per acquisire dati di un servizio definito da terzi

  // Applico il metodo "open"
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
    true
  );
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
};
