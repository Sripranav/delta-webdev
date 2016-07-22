var a = [9];
var b = [9];
for(i=1; i<=9; i++)
{
    a[i] = i;
}
var cid;
moveCounter = 0;
function insert(click_id)
{  
   if(moveCounter == 4)
   { 
      a[click_id - 1] = "X";
      document.getElementById(click_id).innerHTML = a[click_id - 1];
      b[click_id] = -1;
      
   }
   else
   { 
       a[click_id] = "X";
      document.getElementById(click_id).innerHTML = a[click_id];
      b[click_id] = -1;  
      moveCounter++;
      if(moveCounter == 1)
      {
          firstclick = click_id;
      }
      if(moveCounter < 3)
      {
         compResponse(moveCounter, firstclick);
      }
      else block();
    }
   check();      
}
function compResponse(moveCounter, firstclick)
{
   if(firstclick == 5)
     {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
        if(moveCounter == 2)
        {
            if(a[5] == a[9])
            {
               a[3] = "O";
               document.getElementById(3).innerHTML = a[3];
               b[3] = -1;
            }
            else
              block();   
        }
     }
    else if(firstclick == 2 || firstclick == 4 || firstclick == 6 || firstclick == 8)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
        if(moveCounter == 2)
        {
            if(a[2] == a[8])
            {
               a[4] = "O";
               document.getElementById(4).innerHTML = a[4];
               b[4] = -1;
            }
            else if(a[4] == a[6])
            {
                a[2] = "O";
                document.getElementById(2).innerHTML = a[2];
                b[2] = -1;
            }
            else if(a[2] == a[4])
            {
                a[1] = "O";
                document.getElementById(1).innerHTML = a[1];
                b[1] = -1;
            }
            else if(a[2] == a[6])
            {
                a[3] = "O";
                document.getElementById(3).innerHTML = a[3];
                b[3] = -1;
            }
            else if(a[4] == a[8])
            {
                a[7] = "O";
                document.getElementById(7).innerHTML = a[7];
                b[7] = -1;
            }
            else if(a[6] == a[8])
            {
                a[9] = "O";
                document.getElementById(9).innerHTML = a[9];
                b[9] = -1;
            }
            else
            {
                block();
            }
        }
    }
    else if(firstclick == 1 || firstclick == 3 || firstclick == 7 || firstclick == 9)   
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
        if(moveCounter == 2)
        {
            if(a[1] == a[9] || a[3] == a[7])
            {
                a[8] = "O";
                document.getElementById(8).innerHTML = a[8];
                b[8] = -1;
            }
            else if(a[1] == a[6])
            {
                a[3] = "O";
                document.getElementById(3).innerHTML = a[3];
                b[3] = -1;
            }
            else if(a[7] == a[6])
            {
                a[9] = "O";
                document.getElementById(9).innerHTML = a[9];
                b[9] = -1;
            }
            else if(a[3] == a[4])
            {
                a[1] = "O";
                document.getElementById(1).innerHTML = a[1];
                b[1] = -1;
            }
            else if(a[4] == a[9])
            {
                a[7] = "O";
                document.getElementById(7).innerHTML = a[7];
                b[7] = -1;
            }
            else
            {
                block();
            }
        }
    }
}
function block()
{
    if(a[1] == a[2] && a[2] == "O" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[1] == a[4] && a[4] == "O" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else if(a[1] == a[5] && a[5] == "O" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(7).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[2] == a[5] && a[5] == "O" && a[8] == 8)
    {
        a[8] = "O";
        document.getElementById(8).innerHTML = a[8];
        b[8] = -1;
    }
    else if(a[3] == a[6] && a[6] == "O" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(9).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[4] == a[5] && a[5] == "O" && a[6] == 6)
    {
        a[6] = "O";
        document.getElementById(6).innerHTML = a[6];
        b[6] = -1;
    }
    else if(a[7] == a[8] && a[8] == "O" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(9).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[3] == a[5] && a[5] == "O" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else if(a[2] == a[3] && a[3] == "O" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[1] == a[3] && a[3] == "O" && a[2] == 2)
    {
        a[2] = "O";
        document.getElementById(2).innerHTML = a[2];
        b[2] = -1;
    }
    else if(a[1] == a[7] && a[7] == "O" && a[4] == 4)
    {
        a[4] = "O";
        document.getElementById(4).innerHTML = a[4];
        b[4] = -1;
    }
    else if(a[7] == a[4] && a[4] == "O" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[1] == a[9] && a[9] == "O" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[9] && a[9] == "O" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[2] == a[8] && a[8] == "O" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[8] && a[8] == "O" && a[2] == 2)
    {
        a[2] = "O";
        document.getElementById(2).innerHTML = a[2];
        b[2] = -1;
    }
    else if(a[3] == a[9] && a[9] == "O" && a[6] == 6)
    {
        a[6] = "O";
        document.getElementById(6).innerHTML = a[6];
        b[6] = -1;
    }
    else if(a[6] == a[9] && a[9] == "O" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[3] == a[7] && a[7] == "O" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[7] && a[7] == "O" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[4] == a[6] && a[6] == "O" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[6] && a[6] == "O" && a[4] == 4)
    {
        a[4] = "O";
        document.getElementById(4).innerHTML = a[4];
        b[4] = -1;
    }
    else if(a[7] == a[9] && a[9] == "O" && a[8] == 8)
    {
        a[8] = "O";
        document.getElementById(8).innerHTML = a[8];
        b[8] = -1;
    }
    else if(a[8] == a[9] && a[9] == "O" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else if(a[1] == a[2] && a[2] == "X" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[1] == a[4] && a[4] == "X" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else if(a[1] == a[5] && a[5] == "X" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(7).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[2] == a[5] && a[5] == "X" && a[8] == 8)
    {
        a[8] = "O";
        document.getElementById(8).innerHTML = a[8];
        b[8] = -1;
    }
    else if(a[3] == a[6] && a[6] == "X" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(9).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[4] == a[5] && a[5] == "X" && a[6] == 6)
    {
        a[6] = "O";
        document.getElementById(6).innerHTML = a[6];
        b[6] = -1;
    }
    else if(a[7] == a[8] && a[8] == "X" && a[9] == 9)
    {
        a[9] = "O";
        document.getElementById(9).innerHTML = a[9];
        b[9] = -1;
    }
    else if(a[3] == a[5] && a[5] == "X" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else if(a[2] == a[3] && a[3] == "X" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[1] == a[3] && a[3] == "X" && a[2] == 2)
    {
        a[2] = "O";
        document.getElementById(2).innerHTML = a[2];
        b[2] = -1;
    }
    else if(a[1] == a[7] && a[7] == "X" && a[4] == 4)
    {
        a[4] = "O";
        document.getElementById(4).innerHTML = a[4];
        b[4] = -1;
    }
    else if(a[7] == a[4] && a[4] == "X" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[1] == a[9] && a[9] == "X" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[9] && a[9] == "X" && a[1] == 1)
    {
        a[1] = "O";
        document.getElementById(1).innerHTML = a[1];
        b[1] = -1;
    }
    else if(a[2] == a[8] && a[8] == "X" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[8] && a[8] == "X" && a[2] == 2)
    {
        a[2] = "O";
        document.getElementById(2).innerHTML = a[2];
        b[2] = -1;
    }
    else if(a[3] == a[9] && a[9] == "X" && a[6] == 6)
    {
        a[6] = "O";
        document.getElementById(6).innerHTML = a[6];
        b[6] = -1;
    }
    else if(a[6] == a[9] && a[9] == "X" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[3] == a[7] && a[7] == "X" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[5] == a[7] && a[7] == "X" && a[3] == 3)
    {
        a[3] = "O";
        document.getElementById(3).innerHTML = a[3];
        b[3] = -1;
    }
    else if(a[5] == a[6] && a[6] == "X" && a[4] == 4)
    {
        a[4] = "O";
        document.getElementById(4).innerHTML = a[4];
        b[4] = -1;
    }
    else if(a[4] == a[6] && a[6] == "X" && a[5] == 5)
    {
        a[5] = "O";
        document.getElementById(5).innerHTML = a[5];
        b[5] = -1;
    }
    else if(a[7] == a[9] && a[9] == "X" && a[8] == 8)
    {
        a[8] = "O";
        document.getElementById(8).innerHTML = a[8];
        b[8] = -1;
    }
    else if(a[8] == a[9] && a[9] == "X" && a[7] == 7)
    {
        a[7] = "O";
        document.getElementById(7).innerHTML = a[7];
        b[7] = -1;
    }
    else
    {
        do{
        cid = Math.ceil(Math.random()*9);
        }
        while(b[cid] == -1);
        a[cid] = "O";
        click_id = cid;
        document.getElementById(click_id).innerHTML = a[cid];
        b[cid] = -1;
    }
}

function check()
{
     if ((a[1] == a[2] && a[2] == a[3] && a[3] == "X") || (a[1] == a[4] && a[4] == a[7] && a[4] == "X") || (a[1] == a[5] && a[5] == a[9] && a[9] == "X") || (a[2] == a[5] && a[5] == a[8] && a[8] == "X") || (a[3] == a[6] && a[6] == a[9] && a[9] == "X") || (a[3] == a[5] && a[5] == a[7] && a[7] == "X") || (a[4] == a[5] && a[5] == a[6] && a[6] == "X") || (a[7] == a[8] && a[8] == a[9] && a[9] == "X"))
     {
        window.alert("Game Over!");
     }
     else if ((a[1] == a[2] && a[2] == a[3] && a[3] == "O") || (a[1] == a[4] && a[4] == a[7] && a[4] == "O") || (a[1] == a[5] && a[5] == a[9] && a[9] == "O") || (a[2] == a[5] && a[5] == a[8] && a[8] == "O") || (a[3] == a[6] && a[6] == a[9] && a[9] == "O") || (a[3] == a[5] && a[5] == a[7] && a[7] == "O") || (a[4] == a[5] && a[5] == a[6] && a[6] == "O") || (a[7] == a[8] && a[8] == a[9] && a[9] == "O"))
     {
        window.alert("You lose!");
     } 
}