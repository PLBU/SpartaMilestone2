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

   if (x <= 15 ) stat = "Suhu terlalu dingin. Atur suhu hingga sekitar 16℃-30℃"
   else if (15 < x && x < 31) stat = "Suhu cukup."
   else stat = "Suhu terlalu panas. Atur suhu hingga sekitar 16℃-30℃"

   document.getElementById('ind-suhu').innerHTML = stat
}



// Infinite loop with interval 1 second
function infiniteLoop(){
   //Change the temperature to a random number
   document.getElementById('temperature').innerHTML = String(generateRandomNumber() )
   document.getElementById('suhu').innerHTML = String(generateRandomNumber()+"℃")
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

function generateRandompH() {
   //Generate random number from 0 to 14 
   return Math.floor((Math.random() * 14) + 1) 
}

function pHIndicator(ph){
   var stat

   if (ph > 6.0 && ph < 7.0) stat = "Suasana optimal"
   else if (ph >= 3.0 && ph <= 6.0) stat = "Suasana asam"
   else if (ph >= 7.0 && ph <= 10.0) stat = "Suasana basa"
   else if (ph > 10.0) stat = "Suasana terlalu basa"
   else stat = "Suasana terlalu asam"
   
   document.getElementById('ph-indicator').innerHTML = stat
}

// Infinite loop with interval 1 second
function infiniteLooppH(){
   //Change the temperature to a random number
   document.getElementById('ph').innerHTML = String(generateRandompH() )

   let ph = parseInt(document.getElementById('ph').innerHTML)

   //Logic indicator with parameter ph
   pHIndicator(ph)

   setTimeout(() => {
      infiniteLooppH()
   }, 1000);
}

infiniteLooppH()