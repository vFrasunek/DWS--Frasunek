let first = document.getElementById ('first');

first. addEventListener('click', function(){
    alert("hey! a man has fallen into a river in lego city");
})
const second = document.getElementById('second');
second.addEventListener('click', function(){
      second.textContent = "jiný random text";
 })

const button = document.getElementById('x') ;
const text = document.getElementById('text');
 button.addEventListener('click',() => {
text.textContent = 'změněný text';
 })

function zobrazText() {
 document.getElementById("z").innerHTML = "zas nějaký random text";
 }

function pozdrav() {
 var jmeno = document.getElementById("jmeno").value;
alert("cs, " + jmeno  );
 }

 function zmenText() {
    document.getElementById("text2").innerHTML = "jinej text";
}
function vratPuvodniText() {
    document.getElementById("text2").innerHTML = "přejeď myší na jiný text";
}

function zobrazCas() {
    var aktualniCas = new Date().toLocaleTimeString();
    document.getElementById("tajm").innerHTML = "Aktuální čas: " + aktualniCas;
}

function zobrazDatum() {
    var aktualniDatum = new Date().toLocaleDateString();
    document.getElementById("datum").innerHTML = "datum nyný: " + aktualniDatum;
}