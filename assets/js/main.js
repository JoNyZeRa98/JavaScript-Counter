let counter = document.getElementById("counter")

let counterStart = 0


function increment(){
    counterStart = counterStart + 1
    counter.innerText = counterStart
}


function remove(){
    counterStart = counterStart - 1
    counter.innerText = counterStart
}
