const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')


function getTime() {
   const bodyEl = document.getElementById('body')

   let h = new Date().getHours()
   let m = new Date().getMinutes()
   let s = new Date().getSeconds()

   if (bodyEl.className === "bg-2") {
      // london time zone
      h += 4
   } else if (bodyEl.className === "bg-3") {
      h += 11
   } else if (bodyEl.className === 'bg-4') {
      h += 6 
   }

   if (h > 24) {
      // in case of hours zones that pass 24 hours
      h -= 24
   }

   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m
   s = s < 10 ? "0" + s : s
   
   

   hourEl.innerText = h
   minuteEl.innerText = m
   secondEl.innerText = s

   

   setTimeout(getTime, 100)
}

getTime()

function getPlace() {
   const bodyEl = document.getElementById('body')
   const placeEl = document.getElementById('timezone').value

   if (placeEl === "london") {
      bodyEl.className = 'bg-2'
   } else if (placeEl === "hongkong") {
      bodyEl.className = 'bg-3'
   } else if (placeEl === "cairo") {
      bodyEl.className = 'bg-4'
   }

   
}

function restartPlace() {
   const bodyEl = document.getElementById('body')
   bodyEl.className = "bg-1"
   document.getElementById('timezone').value = ""
}