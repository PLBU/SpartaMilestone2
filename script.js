var plotCount = 0

function addPlot(){
   const plotList = document.getElementById("plot-list")

   plotCount += 1

   const plotItem = document.createElement("div")
   plotItem.className = "d-flex justify-content-center"

   const plotTextHolder = document.createElement("div")
   plotTextHolder.setAttribute("style", "padding: 10px");

   const plotName = document.createElement("h4")
   plotName.innerHTML = 'Plot ' + String(plotCount)

   const plotPlant = document.createElement("h6")
   plotPlant.innerHTML = 'Tanaman : ' + generateRandomPlant()

   const plotImage = document.createElement("img")
   plotImage.setAttribute("src", "./placeholder-plot.png")
   plotImage.className = "plot-img button img-fluid"
   plotImage.setAttribute("type", "button")
   plotImage.setAttribute("data-toggle", "modal")
   plotImage.setAttribute("data-target", "#myModal")
   plotImage.onclick = ( () => {
      document.getElementById('modal-title').innerHTML = "Status " + plotName.innerHTML
      infiniteLoop()
   })

   const plotHolder = document.createElement("div")
   plotHolder.className = "plot-content"
   
   const checkPlot = document.createElement("button")
   checkPlot.innerHTML = "Details"
   checkPlot.className = "plot-check btn btn-outline float-right"
   

   const deleteButton = document.createElement("button")
   deleteButton.className = "plot-check btn btn-outline float-right"
   deleteButton.innerHTML = "Delete"
   deleteButton.onclick = ( () => {
      plotItem.remove()
   })
   
   plotHolder.appendChild(plotImage)
   plotTextHolder.appendChild(plotName)
   plotTextHolder.appendChild(plotPlant)
   plotTextHolder.appendChild(deleteButton)
   plotHolder.appendChild(plotTextHolder)
   plotItem.appendChild(plotHolder)
   plotList.insertBefore(plotItem, plotList.childNodes[plotList.childElementCount+1])

   if (plotCount > 0) document.getElementById('intro').remove()
}

function generateRandomPlant(){
   const plants = ['Wortel', 'Padi', 'Semangka', 'Tomat', 'Jagung', 'Kopi', 'Stroberi', 'Gandum', 'Cabe', 'Bayam']

   return plants[Math.floor((Math.random() * 10) ) ]
}

function generateRandompH() {
   //Generate random number from 1 to 14 
   return Math.floor((Math.random() * 14) + 1) 
}

function generateRandomTemp() {
   //Generate random number from 1 to 40
   return Math.floor((Math.random() * 40) + 1) 
}

function generateRandomHumidity() {
   //Generate random number from 40 to 99
   return Math.floor(40 + (Math.random() * 60))
}

function generateRandomLight () {
    return Math.floor((Math.random()*1000)+1)
}

function generateRandomN(){
   //generate random number from 1 to 100 
   return Math.floor((Math.random()*100)+1)
}

function pHIndicator(ph){
   var stat

   if (ph > 6.0 && ph < 7.0) stat = "Suasana sudah optimal"
   else if (ph >= 3.0 && ph <= 6.0) stat = "Suasana asam, usahakan pH pada 6 - 7"
   else if (ph >= 7.0 && ph <= 10.0) stat = "Suasana basa, usahakan pH pada 6 - 7"
   else if (ph > 10.0) stat = "Suasana terlalu basa, usahakan pH pada 6 - 7"
   else stat = "Suasana terlalu asam, usahakan pH pada 6 - 7"
   
   document.getElementById('ph-indicator').innerHTML = stat
}

function indikatorsuhu(x){
   var stat

   if (x <= 15 ) stat = "Suhu terlalu dingin. Atur suhu hingga sekitar 16℃-30℃"
   else if (15 < x && x < 31) stat = "Suhu cukup."
   else stat = "Suhu terlalu panas. Atur suhu hingga sekitar 16℃-30℃"

   document.getElementById('ind-suhu').innerHTML = stat
}

// Indikator kelembapan, abis searching katanya 60-90% cukup, tapi kalo mau diubah lagi sabeb sihh
function humidityIndicator(humidity){
   var stat

   if (40 <= humidity && humidity < 60 ) stat = "Terlalu rendah, ambil tindakan!"
   else if (60 <= humidity && humidity <= 90) stat = "Kelembapan sudah pas"
   else stat = "Terlalu tinggi, ambil tindakan!"

   document.getElementById('humidity-indicator').innerHTML = stat
}

function lightIndicator(x){
    if (x>=1 && x<=50) return "Situasi remang-remang, sangat perlu tambahan cahaya"
    else if (x>50 && x<=100) return "Situasi redup, perlu tambahan cahaya"
    else if (x>100 && x<=400) return "Situasi terang, pertahankan keadaan sekarang"
    else return "Situasi sangat Terang, dapat mengurangi intensitas cahaya"
}

function Nindicator(N){
   if (N<10) return "Sangat rendah, perlu menambahkan banyak kadar nitrogen"
   else if (N>=10 && N <=20) return "Rendah, perlu menambahkan kadar nitrogen"
   else if (N>20 && N <=50) return "Sedang, kadar nitrogen sudah cukup"
   else if (N>50 && N <= 75) return "Tinggi, kadar nitrogen berlebih"
   else return "Sangat tinggi, kadar nitrogen terlalu berlebih"
 
}

// Infinite loop with interval 1 second
function infiniteLoop(){
   const light = document.getElementById('Pencahayaan (Lux)')
   const light_indicator = document.getElementById ('Pencahayaan (Lux) - indicator')
   const nitro = document.getElementById('N')
   const nitroindicator = document.getElementById('N-indicator')

   const amountOfLight = generateRandomLight()
   const N = generateRandomN()

   //Change the temperature to a random number
   document.getElementById('suhu').innerHTML = String(generateRandomTemp()+"℃")
   document.getElementById('ph').innerHTML = String(generateRandompH() )
   document.getElementById('humidity').innerHTML = String(generateRandomHumidity() + "%")

   light.innerHTML = String(amountOfLight) + " lux"
   nitro.innerHTML = String(N) + "%"

   let ph = parseInt(document.getElementById('ph').innerHTML)
   let temp = parseInt(document.getElementById('suhu').innerHTML)
   let humidity = parseInt(document.getElementById('humidity').innerHTML)

   //Logic indicator
   indikatorsuhu(temp)
   pHIndicator(ph)
   humidityIndicator(humidity)

   light_indicator.innerHTML = lightIndicator(amountOfLight)
   nitroindicator.innerHTML = Nindicator(N)

   setTimeout(() => {
      infiniteLoop()
   }, 10000);
}