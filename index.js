// Import stylesheets
import "./style.css"; 
var cityElems = document.getElementsByClassName("città");
var cityElems_add;
var aggiunta = document.getElementById("aggiungi");
aggiunta.onclick = () => {
    cityElems_add = document.getElementById("ct").value;
    var node = document.createElement("LI");
    var btn = document.createElement("BUTTON");
    var lista = document.getElementById("lista");
    var textnode = document.createTextNode(cityElems_add);
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "città");
    btn.appendChild(textnode);
    node.appendChild(btn);
    lista.insertBefore(node, lista.childNodes[0]);
};
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
        "A " + city + " ci sono " + dataObject.main.temp + " gradi" + "<br/>" +
        "e una pressione di " + dataObject.main.pressure;
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
