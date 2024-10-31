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
 const jmeno = document.getElementById("jmeno").value;
alert("cs, " + jmeno  );
 }

 function zmenText() {
    document.getElementById("text2").innerHTML = "jinej text";
}
function vratPuvodniText() {
    document.getElementById("text2").innerHTML = "přejeď myší na jiný text";
}

function zobrazCas() {
    const aktualniCas = new Date().toLocaleTimeString();
    document.getElementById("tajm").innerHTML = "Aktuální čas: " + aktualniCas;
}

function zobrazDatum() {
    const aktualniDatum = new Date().toLocaleDateString();
    document.getElementById("datum").innerHTML = "datum nyný: " + aktualniDatum;
}

function addThree() {
    const userInput = document.getElementById("userInput").value;
    const result = Number(userInput) + 3;
    document.getElementById("něco nvm už").textContent = "Výsledek: " + result;
}
function sumValues() {
    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const result = firstNumber + secondNumber;
    document.getElementById("popis").textContent = "Výsledek: " + result;
}
const image = document.getElementById("zoomImage");


image.addEventListener("mouseover", () => {
    image.style.transition = "nvm už fakt";
    image.style.transform = "scale(1.2)"; 
});
image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
});