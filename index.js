// Import stylesheets
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
var bottone_media = document.getElementById("media");
var numero_elementi = cityElems.length; //numero città
for (let elem of cityElems ) {
  //definisco una funzione arraow come proprieta del DOM
  elem.onclick = () => display(elem.innerHTML);
}

//temperatura media
bottone_media.onclick = () => {
  var vettore = [];
  var somma = 0;
  for (let city00 of cityElems){
    vettore.push(funzione_media(city00.innerHTML));
  }
  function funzione_media(city01){
    var richiesta = new XMLHttpRequest();
    richiesta.onload = function(){
      if(richiesta.status === 200){
        var dataObject = JSON.parse(richiesta.response);
        var singola_temperatura = dataObject.main.temp;
        console.log("singola" + singola_temperatura);
        return singola_temperatura;
      }else{
        document.write("<h3>errore calcolo media singolo elemento</h3>");
      }
    };
    richiesta.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
    city01,true);
    richiesta.send();
    console.log("richiesta = " + richiesta);


  }
  
  for(var i = 0; i < vettore.length; i++)
    somma += vettore[i];
  console.log(vettore);
  console.log("numero = " + numero_elementi);
  var media = somma/numero_elementi;
  document.getElementById("risposta").innerHTML = "Media Temperatura = " + media;
};
// ----____----
//singola temperatura città 
function display(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      console.log(request.response);
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
