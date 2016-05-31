var flag =0;
  var v;
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
         totaltime_secs = (days*24*60*60) + (hours*60*60) + (mins*60) +  (secs*1);
      }
  }
  function countdown() 
  {
      if(flag == 1 && totaltime_secs>=0)
      {
         var Seconds = Math.floor(totaltime_secs%60);
         var Minutes = Math.floor(totaltime_secs/60)%60;
         var Hours = Math.floor((totaltime_secs/60)/60)%24;
         var Days = Math.floor(((totaltime_secs/60)/60)/24);
         document.getElementById("days_number").innerHTML = Days;
         document.getElementById("hours_number").innerHTML = Hours;
         document.getElementById("minutes_number").innerHTML = Minutes;
         document.getElementById("seconds_number").innerHTML = Seconds;
         totaltime_secs--;
      }
  }
  function timer() 
  {
      flag =1;
      v = setInterval(countdown,1000);
  }
  function pause()
  {
      flag = 0;
      clearInterval(v);
  }
  function reset()
  {
      flag = 0;
      clearInterval(v);
      document.getElementById("days_number").innerHTML = 0 ;
      document.getElementById("hours_number").innerHTML = 0 ;      
      document.getElementById("minutes_number").innerHTML = 0 ;
      document.getElementById("seconds_number").innerHTML = 0 ;
      input();
  }