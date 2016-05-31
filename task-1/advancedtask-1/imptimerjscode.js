var flag;
  localStorage.flag = 0;
  var v;
  var totaltime_secs;
  function input() 
  {  
      var days = document.getElementById("days").value;
      var hours = document.getElementById("hrs").value;
      var mins = document.getElementById("min").value;
      var secs = document.getElementById("sec").value;
      if(secs>60 || mins>60 || hours>24)
      {
         document.getElementById("constraint").innerHTML = "Hours should be less than 24. Minutes and seconds should be less than 60";
      }
      else
      {
          localStorage.totaltime_secs = (days*24*60*60) + (hours*60*60) + (mins*60) +  (secs*1);
      }
  }
  function countdown() 
  {
      if(localStorage.flag == 1 && localStorage.totaltime_secs>=0)
      {
         var Seconds, Minutes, Hours, Days;
         localStorage.Seconds = Math.floor(localStorage.totaltime_secs%60);
         localStorage.Minutes = Math.floor(localStorage.totaltime_secs/60)%60;
         localStorage.Hours = Math.floor((localStorage.totaltime_secs/60)/60)%24;
         localStorage.Days = Math.floor(((localStorage.totaltime_secs/60)/60)/24);
         document.getElementById("days_number").innerHTML =  localStorage.Days;
         document.getElementById("hours_number").innerHTML = localStorage.Hours;
         document.getElementById("minutes_number").innerHTML =  localStorage.Minutes;
         document.getElementById("seconds_number").innerHTML =  localStorage.Seconds;
         localStorage.totaltime_secs--;
      }
  }
  function timer() 
  {
      localStorage.flag =1;
      v = setInterval(countdown,1000);
  }
  function pause()
  {
      localStorage.flag = 0;
      clearInterval(v);
  }
  function reset()
  {
      localStorage.flag = 0;
      clearInterval(v);
      document.getElementById("days_number").innerHTML = 0 ;
      document.getElementById("hours_number").innerHTML =0;       
      document.getElementById("minutes_number").innerHTML = 0 ;
      document.getElementById("seconds_number").innerHTML = 0 ;
      input();
  }
function refresh() {
    location.reload();
}