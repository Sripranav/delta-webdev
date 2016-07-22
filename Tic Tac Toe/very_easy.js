var a = [9];
var b = [9];
for(i=1; i<=9; i++)
{
    a[i] = i;
}
var cid;
var moveCounter = 0;
function insert(click_id)
{  
   if(moveCounter == 4)
   {
       a[click_id - 1] = "X";
       document.getElementById(click_id).innerHTML = a[click_id - 1];
       b[click_id] = -1;
       moveCounter++;
   }
   else
   {
   	   a[click_id] = "X";
       document.getElementById(click_id).innerHTML = a[click_id];
       b[click_id] = -1;
       moveCounter++;
       do{
           cid = Math.ceil(Math.random()*9);
         }
       while(b[cid] == -1);
  	   a[cid] = "O";
   	   click_id = cid;
       document.getElementById(click_id).innerHTML = a[cid];
       b[cid] = -1;
    }
   check();   
} 
function check()
{
	 if ((a[1] == a[2] && a[2] == a[3] && a[3] == "X") || (a[1] == a[4] && a[4] == a[7] && a[4] == "X") || (a[1] == a[5] && a[5] == a[9] && a[9] == "X") || (a[2] == a[5] && a[5] == a[8] && a[8] == "X") || (a[3] == a[6] && a[6] == a[9] && a[9] == "X") || (a[3] == a[5] && a[5] == a[7] && a[7] == "X") || (a[4] == a[5] && a[5] == a[6] && a[6] == "X") || (a[7] == a[8] && a[8] == a[9] && a[9] == "X"))
     {
        window.alert("You win!");
     }
     else if ((a[1] == a[2] && a[2] == a[3] && a[3] == "O") || (a[1] == a[4] && a[4] == a[7] && a[4] == "O") || (a[1] == a[5] && a[5] == a[9] && a[9] == "O") || (a[2] == a[5] && a[5] == a[8] && a[8] == "O") || (a[3] == a[6] && a[6] == a[9] && a[9] == "O") || (a[3] == a[5] && a[5] == a[7] && a[7] == "O") || (a[4] == a[5] && a[5] == a[6] && a[6] == "O") || (a[7] == a[8] && a[8] == a[9] && a[9] == "O"))
     {
        window.alert("You lose!");
     } 
}