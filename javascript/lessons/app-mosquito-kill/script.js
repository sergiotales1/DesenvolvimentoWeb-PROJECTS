// using a window method to find the total height and width to spawn the mosquitos into a visible place

var totalHeight = 0
var totalWidth = 0

function setTotalGameScreen() {
   // with a onresize atribute into <body> we change the totalWidth and totalHeight of the screen 
   totalHeight = window.innerHeight
   totalWidth = window.innerWidth
   console.log(totalWidth, totalHeight)
}

setTotalGameScreen()

function randomPosition() {
   // generating the positionX and positionY randomly (where the mosquito will appear) 
   // now we are generating numbers from 0 to 1 but multiplying them for the totalWidth and totalHeight value, limiting to numbers that floats by 0 and 100% totalWidth / Height
   var positionX = Math.floor(Math.random() * totalWidth) - 90
   var positionY = Math.floor(Math.random() * totalHeight) - 90

   positionX = positionX < 0 ? 0 : positionX
   positionY = positionY < 0 ? 0 : positionY
   
   console.log(positionX, positionY)
   
   // create the HTML element (the image)
   var mosquitoImg = document.createElement('img')
   
   mosquitoImg.src = 'image/mosquito.png'
   mosquitoImg.className = ('mosquito1')
   // positioning the randomly mosquito
   mosquitoImg.style.left = positionX + 'px'  
   mosquitoImg.style.top = positionY + 'px'
   mosquitoImg.style.position = 'absolute'  
   // appending the elemento to the document tree
   document.body.appendChild(mosquitoImg)
}

