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



function indikatorsuhu(x){
   var stat

   if (0 < x && x <= 20 ) stat = "Suhu terlalu dingin"
   else if (20 < x && x < 30) stat = "Suhu cukup"
   else stat = "Suhu terlalu panas"

   document.getElementById('ind-suhu').innerHTML = stat
}



// Infinite loop with interval 1 second
function infiniteLoop(){
   //Change the temperature to a random number
   document.getElementById('temperature').innerHTML = String(generateRandomNumber() )
   document.getElementById('suhu').innerHTML = String(generateRandomNumber() )
   let temp = parseInt(document.getElementById('temperature').innerHTML)
   let x = parseInt(document.getElementById('suhu').innerHTML)
   //Logic indicator with parameter temp
   tempIndicator(temp)
   indikatorsuhu(x)

   setTimeout(() => {
      infiniteLoop()
   }, 1000);
}

infiniteLoop()