function generateRandomNumber () {
    return Math.floor((Math.random()*1000)+1)
}

const header = document.getElementById('Pencahayaan (Lux)')
const headerIndicator = document.getElementById ('Pencahayaan (Lux) - indicator')

function infiniteLoop () {
    const x = generateRandomNumber()
    
    header.innerHTML = String(x)
    headerIndicator.innerHTML = indicator(x)

    setTimeout( () => {
        infiniteLoop()
    },1000)
}

function indicator(x){
    if (x>=1 && x<=50) return "Remang-remang"
    else if (x>50 && x<=100) return "Redup"
    else if (x>100 && x<=400) return "Terang"
    else return "Sangat Terang"
}

infiniteLoop ()
