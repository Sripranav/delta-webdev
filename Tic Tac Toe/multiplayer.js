var moveCounter = 0;
var a = [9];
for(i=1; i<=9; i++)
{
    a[i] = i;
}
function insert(click_id)
{
	if(moveCounter%2 == 0)
	{
		a[click_id] = "X";
		document.getElementById(click_id).innerHTML = a[click_id];
	}
	else
	{
		a[click_id] = "O";
		document.getElementById(click_id).innerHTML = a[click_id];
	}
	moveCounter++;
	check();
}
function check()
{
	 if ((a[1] == a[2] && a[2] == a[3]) || (a[1] == a[4] && a[4] == a[7]) || (a[1] == a[5] && a[5] == a[9]) || (a[2] == a[5] && a[5] == a[8]) || (a[3] == a[6] && a[6] == a[9]) || (a[3] == a[5] && a[5] == a[7]) || (a[4] == a[5] && a[5] == a[6]) || (a[7] == a[8] && a[8] == a[9]))
	 {
	 	window.alert("You win!");
     }
     else if(moveCounter == 9)
     {
     	window.alert("It is a draw!")
     }
}