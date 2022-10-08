let text;
let person = prompt("Please enter your name:");
if (person == null || person == "") {
  text = "Welcome";
} else {
  text = "Hello " + person + ", How are you today?";
}
document.getElementById("username").innerHTML = text;


function startTime() {
    const date = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayname = weekday[date.getDay()];
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clockdisplay').innerHTML =  h + ":" + m + ":" + s +' '+ dayname;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  startTime();