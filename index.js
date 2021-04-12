
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
var bottone_media = document.getElementById("media");
var vettore_elementi = [];
var req = [];

for (let elem of cityElems ) {
  vettore_elementi.push(elem.innerHTML);
  console.log(elem.innerHTML);
  elem.onclick = () => display(elem.innerHTML);
}
bottone_media.onclick = display_avg(vettore_elementi);
///////////////////////////////////
function display_avg (v){
  var media = 0
  for(let data of v){
    var request = new XMLHttpRequest();
    request.onload = function(){
      if(request.status == 200){
        var dataObject = JSON.parse(request.response);
        var temp = dataObject.main.temp;
        media += dataObject.main.temp / v.length;
        document.getElementById("risposta_media").innerHTML = 
        "la media è di " + media + "gradi";
      }else{
        document.getElementById("risposta_media").innerHTML = "errore";
      }
    }
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
    data,true);
    request.send();
  }
}
// 6048b7faacmsh8840d0109f92483p15a7a2jsn51f760b208fc

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
