function clock(){
    const hours = document.getElementById('hour')
    const minutes = document.getElementById('min')
    const second = document.getElementById('sec')
    const amPm = document.getElementById('ampm')

    const h = new Date().getHours()
    const m = new Date().getMinutes()
    const s = new Date().getSeconds()
    let AMPM = 'AM'

    if(h >= 12){
        AMPM = 'PM'
    }else{
        AMPM = 'AM'
    }
    
    hours.innerHTML = (h < 10) ?  "0" + h : h;
    minutes.innerHTML = (m < 10) ? "0" + m : m;
    second.innerHTML = (s < 10 )? "0" + s : s;
    amPm.innerHTML = AMPM;

}

setInterval(clock, 1000);