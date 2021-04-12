
import "./style.css"; 

var cityElems = document.getElementsByClassName("città");
var bottone_media = document.getElementById("mediaprova");
var numero_elementi = cityElems.length; //numero città
var vettore_elementi = [];
for (let elem of cityElems ) {
  vettore_elementi.push(elem.innerHTML);
  console.log(elem.innerHTML);
}
bottone_media.onclick = () => display_avg(vettore_elementi);

function display_avg (v){
  
  document.getElementById("rispostaprova").innerHTML = v;
}
