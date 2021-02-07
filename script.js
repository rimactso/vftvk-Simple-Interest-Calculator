function compute()
{
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=(principal*years*rate)/100;
    var d = new Date();
    var y = d.getFullYear();
    year=y+(years*1);
    spans=document.getElementsByTagName("span");
    spans=document.getElementsByTagName("span");
        spans[1].innerHTML= "If you deposit "+principal+","+
"at an interest rate of "+spans[0].innerHTML+"."+
"You will receive an amount of "+interest+","+
"in the year "+year;
}
function readRange()
{
rate=document.getElementById("rate").value;
spans=document.getElementsByTagName("span");
spans[0].innerHTML=rate+"%";
}
