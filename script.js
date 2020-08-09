var plotCount = 0
const plotList = document.getElementById("plot-list")

function addPlot(){
   plotCount += 1
   const plotItem = document.createElement("div")
   plotItem.className = "col-sm-4 d-flex justify-content-center"

   const plotName = document.createElement("h4")
   plotName.innerHTML = 'Plot ' + String(plotCount)

   const statButton = document.createElement("button")
   statButton.className = "content button"
   statButton.setAttribute("type", "button")
   statButton.setAttribute("data-toggle", "modal")
   statButton.setAttribute("data-target", "#myModal")

   const deleteButton = document.createElement("button")
   deleteButton.className = "content button"
   deleteButton.innerHTML = "Delete"
   deleteButton.onclick = ( () => {
      plotItem.remove()
   })

   statButton.appendChild(plotName)
   plotItem.appendChild(statButton)
   plotItem.appendChild(deleteButton)
   plotList.insertBefore(plotItem, plotList.childNodes[plotList.childElementCount-1]);
}

function generateRandomNumber() {
   //Generate random number from 1 to 40
   return Math.floor((Math.random() * 40) + 1) 
}

function tempIndicator(temp){
   var stat

   if (0 < temp && temp <= 20 ) stat = "Too cold"
   else if (20 < temp && temp < 30) stat = "Just right"
   else stat = "Too hot"

   document.getElementById('temp-indicator').innerHTML = stat
}

// Infinite loop with interval 1 second
function infiniteLoop(){
   //Change the temperature to a random number
   document.getElementById('temperature').innerHTML = String(generateRandomNumber() )

   let temp = parseInt(document.getElementById('temperature').innerHTML)

   //Logic indicator with parameter temp
   tempIndicator(temp)

   setTimeout(() => {
      infiniteLoop()
   }, 1000);
}

infiniteLoop()

function generateRandomN(){
   //generate random number from 0 to 100 
   return Math.floor((Math.random()*100)+1)
}

const nitro = document.getElementById('N')
const nitroindicator = document.getElementById('N-indicator')

function Nindicator(N){
   if (N<10) return "Sangat rendah"
   else if (N>=10 && N <=20) return "Rendah"
   else if (N>20 && N <=50) return "Sedang"
   else if (N>50 && N <= 75) return "Tinggi"
   else return "Sangat tinggi"
 
}

function infiniteLoopN(){
   const N = generateRandomN()

   nitro.innerHTML = String(N)
   nitroindicator.innerHTML = Nindicator(N)

   setTimeout(() => {
      infiniteLoopN()
   },2000)// tiap 2 sekon
}

infiniteLoopN()