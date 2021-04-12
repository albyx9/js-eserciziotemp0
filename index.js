
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
var bottone_media = document.getElementById("mediaprova");
var numero_elementi = cityElems.length; //numero città
var vettore_elementi = [];
var req = [];
for (let elem of cityElems ) {
  vettore_elementi.push(elem.innerHTML);
  console.log(elem.innerHTML);
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
        document.getElementById("risposta").innerHTML = 
        "la media è di " + media + "gradi";
      }else{
        document.getElementById("risposta").innerHTML = "errore";
      }
    }
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
    data,true);
    request.send();
  }
}
// 6048b7faacmsh8840d0109f92483p15a7a2jsn51f760b208fc