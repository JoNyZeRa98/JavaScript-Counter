let counter = document.getElementById("counter")

let roundTrollati = 0


function increment(){
    roundTrollati = roundTrollati + 1
    counter.innerText = roundTrollati
}


function remove(){
    roundTrollati = roundTrollati - 1
    counter.innerText = roundTrollati
}
