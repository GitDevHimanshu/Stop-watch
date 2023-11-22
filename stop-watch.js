var lapcounter = 1;
var counter = 1;
var id;

var timer = document.getElementById("timer");
var startstop = document.getElementById("startstop");
var lapbtn = document.getElementById("lap");

startstop.addEventListener('click', function(){
    if (startstop.innerHTML === " start "){
        startstop.style.color = "red";
        startstop.innerHTML = "Stop";
        lapbtn.innerHTML = "Lap."; 
        startstop.style.backgroundColor = "#351614";

        id = setInterval(function() {
            var min, sec, milisec;
            sec = parseInt(counter / 100);

            milisec = counter % 100;
            min = parseInt(sec / 60);
            sec = sec % 60;

            if(milisec < 10){
                milisec = '0' + milisec;
            }
            if (min < 10) {
                min = '0' + min;
            }
            if (sec < 10) {
                sec = '0' + sec;
            }

            timer.innerText = min + ":" + sec + ":" + milisec;
            counter++;

        }, 10);
    } else if (startstop.innerHTML === "Stop"){
        clearInterval(id);
        startstop.style.color = "greenyellow";
        startstop.innerHTML = " start ";
        lapbtn.innerHTML = "Re-st"; 
        startstop.style.backgroundColor = "#184123";
    }
});

var lapcontainer = document.getElementById("lap-container");
lapbtn.addEventListener("click", function(){
    if(lapbtn.innerHTML === "Lap."){
        var lapdiv = document.createElement("div");
        lapdiv.style.display = "flex";
        lapdiv.style.borderTop = "1px solid grey";
        lapcontainer.appendChild(lapdiv);

        var lapcount = document.createElement("p");
        lapcount.innerHTML = "LAP " + lapcounter;
        lapcount.style.color = "grey";
        lapcounter++;
        lapcount.style.marginLeft = "9%";
        lapdiv.appendChild(lapcount);

        var p = document.createElement("p");
        p.innerText = timer.innerHTML;
        p.style.marginLeft = "57%";
        lapdiv.appendChild(p);

    } else if(lapbtn.innerHTML === "Re-st"){
        lapcontainer.innerHTML = "";
        timer.innerHTML = "00:00:00";
        lapcounter = 1;
        counter = 1;
    }
});
