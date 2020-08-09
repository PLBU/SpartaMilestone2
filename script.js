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

// Buat generate random kelembapan
function generateRandomNumber() {
   //Generate random number from 40 to 99
   return Math.floor(40 + (Math.random() * 60))
}

// Indikator kelembapan, abis searching katanya 60-90% cukup, tapi kalo mau diubah lagi sabeb sihh
function humidityIndicator(humidity){
   var stat

   if (40 <= humidity && humidity < 60 ) stat = "Terlalu rendah, ambil tindakan!"
   else if (60 <= humidity && humidity <= 90) stat = "Cukup"
   else stat = "Terlalu tinggi, ambil tindakan!"

   document.getElementById('humidity-indicator').innerHTML = stat
}

// Infinite loop with interval 5 second
function infiniteLoop(){
   //Change the humidity to a random number
   document.getElementById('humidity').innerHTML = String(generateRandomNumber() + "%")

   let humidity = parseInt(document.getElementById('humidity').innerHTML)

   //Logic indicator with parameter temp
   humidityIndicator(humidity)

   setTimeout(() => {
      infiniteLoop()
   }, 5000);
}

infiniteLoop()