var plotCount = 0
const plotList = document.getElementById("plot-list")

function addPlot(){
   plotCount += 1
   const plotItem = document.createElement("div")
   plotItem.className = "d-flex justify-content-center"

   const plotTextHolder = document.createElement("div")
   plotTextHolder.setAttribute("style", "padding: 10px");

   const plotName = document.createElement("h4")
   plotName.innerHTML = 'Plot ' + String(plotCount)

   const plotPlant = document.createElement("h6")
   plotPlant.innerHTML = 'Tanaman : Wortel'

   const plotImage = document.createElement("img")
   plotImage.setAttribute("src", "./placeholder-plot.png")
   plotImage.className = "plot-img button img-fluid"

   const plotHolder = document.createElement("div")
   plotHolder.className = "plot-content"
   
   const checkPlot = document.createElement("button")
   checkPlot.innerHTML = "Details"
   checkPlot.className = "plot-check btn btn-outline float-right"
   checkPlot.setAttribute("type", "button")
   checkPlot.setAttribute("data-toggle", "modal")
   checkPlot.setAttribute("data-target", "#myModal")
   
   //const statButton = document.createElement("button")
   //statButton.className = "plot-content button"
   //statButton.setAttribute("type", "button")
   //statButton.setAttribute("data-toggle", "modal")
   //statButton.setAttribute("data-target", "#myModal")

   plotHolder.appendChild(plotImage)
   plotTextHolder.appendChild(plotName)
   plotTextHolder.appendChild(plotPlant)
   plotTextHolder.appendChild(checkPlot)
   plotHolder.appendChild(plotTextHolder)
   //statButton.appendChild(plotImage)
   //statButton.appendChild(plotName)
   //plotItem.appendChild(statButton)
   plotItem.appendChild(plotHolder)
   //plotItem.appendChild(deleteButton)
   plotList.insertBefore(plotItem, plotList.childNodes[plotList.childElementCount-1]);
}

function deletePlot(){
   deleteButton.onclick = ( () => {
      plotItem.remove()
   })
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