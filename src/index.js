const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

setInterval(updateClock,500);

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    // convert 24hr to 12hr
    //h = (h>12)?h-12:h;

    // add zero before single digit number
    h = (h<10)?"0"+h:h;
    m = (m<10)?"0"+m:m;
    s = (s<10)?"0"+s:s;

    hours.innerHTML = h.toString();
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    console.log("update")
}
