/* CLOCK */

function updateClock(){

const now = new Date()

document.getElementById("clock").innerText =
now.toLocaleTimeString()

}

setInterval(updateClock,1000)



function rand(){

return Math.floor(Math.random()*100)

}



/* CPU CHART */

const cpuChart = new Chart(

document.getElementById("cpuChart"),

{

type:"line",

data:{

labels:[1,2,3,4,5,6,7],

datasets:[{

data:[30,40,35,50,60,55,70],

borderColor:"#38bdf8",

tension:.4

}]

}

}

)



/* RAM */

const ramChart = new Chart(

document.getElementById("ramChart"),

{

type:"line",

data:{

labels:[1,2,3,4,5,6,7],

datasets:[{

data:[20,30,45,35,55,65,60],

borderColor:"#22c55e",

tension:.4

}]

}

}

)



/* SPEED */

const speedChart = new Chart(

document.getElementById("speedChart"),

{

type:"bar",

data:{

labels:["Download","Upload"],

datasets:[{

data:[80,35],

backgroundColor:["#38bdf8","#22c55e"]

}]

}

}

)



function updateStats(){

cpuChart.data.datasets[0].data.push(rand())
cpuChart.data.datasets[0].data.shift()
cpuChart.update()

ramChart.data.datasets[0].data.push(rand())
ramChart.data.datasets[0].data.shift()
ramChart.update()

const storage = rand()

document.getElementById("storageFill").style.width =
storage+"%"

document.getElementById("storageText").innerText =
storage+"% used"

}

setInterval(updateStats,2000)



/* CARD CLICK */

document.querySelectorAll(".clickable").forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("activeCard")

})

})

const speedBtn = document.getElementById("startTest")

const speedNumber = document.getElementById("speedNumber")

speedBtn.addEventListener("click",()=>{

let speed = 0

let target = Math.floor(Math.random()*200)+50

let test = setInterval(()=>{

speed+=5

speedNumber.innerText = speed

if(speed>=target){

clearInterval(test)

showNotification("Speed test finished: "+target+" Mbps")

}

},40)

})

const trafficChart = new Chart(

document.getElementById("trafficChart"),

{

type:"line",

data:{

labels:[1,2,3,4,5,6,7,8,9],

datasets:[{

data:[10,30,20,40,50,30,60,70,55],

borderColor:"#38bdf8",

tension:.4

}]

}

}

)



function updateTraffic(){

trafficChart.data.datasets[0].data.push(rand())

trafficChart.data.datasets[0].data.shift()

trafficChart.update()

}

setInterval(updateTraffic,1500)

function showNotification(text){

const notif = document.getElementById("notification")

notif.innerText = text

notif.style.opacity = 1

setTimeout(()=>{

notif.style.opacity = 0

},3000)

}

const toggle = document.getElementById("darkToggle")

toggle.addEventListener("click",()=>{

document.body.classList.toggle("lightMode")

showNotification("Theme switched")

})