var v = countDownTimer();
function countDownTimer () 
{
  var currDate = new Date();
  var eventDate = new Date("June 29 2016 10:00:00");
  var time_left = eventDate - currDate;
  if(time_left > 0)
  {
     var seconds = Math.floor((time_left / 1000) % 60);
     var mins = Math.floor((time_left / (1000 * 60)) % 60);
     var hours = Math.floor((time_left / (1000 * 60 * 60)) % 24);
     var days = Math.floor(time_left / (1000 * 60 * 60 * 24));
     document.getElementById("days_number").innerHTML= days;
     document.getElementById("hours_number").innerHTML= hours;
     document.getElementById("minutes_number").innerHTML= mins;
     document.getElementById("seconds_number").innerHTML= seconds;
  }
  else 
     document.getElementById("launched").innerHTML = "Atlas V 421 has been launched";
}  
var interval = setInterval(countDownTimer,1000);