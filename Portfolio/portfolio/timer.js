function odliczanie()
{
var dzisiaj = new Date();

var hours = dzisiaj.getHours();
if (hours <10) hours ="0"+hours ;

var minutes = dzisiaj.getMinutes();
if (minutes <10) minutes ="0"+minutes;

var seconds = dzisiaj.getSeconds();
if (seconds<10) seconds="0"+seconds;

document.getElementById("zegar").innerHTML = hours+":"+minutes+":"+seconds;

setTimeout("odliczanie()",1000);
}
