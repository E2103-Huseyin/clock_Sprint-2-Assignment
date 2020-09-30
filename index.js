

function showtime(){
    var date =new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var a = "AM"; 
    
    if (h>12){
        h -= 12;
        a= "PM"
    }
    

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + a;
    document.querySelector("#clock").innerHTML = time;
    setTimeout(showtime,1000);
}

showtime();