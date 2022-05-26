let yourName = prompt("İsminiz")

let myName = document.querySelector("#myName")
myName.innerHTML = `${yourName}`
 
function showTime() {
    let myClock = document.querySelector("#myClock");
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours ();
    let minute = date.getMinutes()
    let second = date.getSeconds();

    if(hour < 10){             // 10'dan küçükse saatin başına 0 koy 
        hour = "0"+hour
    }
    if(minute < 10){           // 10'dan küçükse dakikanın başına 0 koy
        minute = "0"+minute
    }
    if(second < 10){           // 10'dan küçükse saniyesnin başına 0 koy
        second = "0"+second
    }
    if(day == 0){
        day = "PAZAR ";
    }else if(day == 1)
        {day = "PAZARTESİ "
    }
    else if (day == 2)
        {day = "SALI "
    }else if (day == 3)
        {day = "ÇARŞAMBA "
    }
    else if (day == 4){
        day = "PERŞEMBE "
    }
    else if (day == 5){
        day = "CUMA "
    }
    else if (day == 6){
        day = "CUMARTESİ "
    }

    myClock.innerHTML = `${day}${hour}:${minute}:${second}`

    setTimeout(showTime, 1000);    // saniyenin akması için setTimeout tanımlandı.
}
 showTime() ;

 


















// let myClock = document.querySelector("#myClock")
// myClock.innerHTML = 14:12:25 
