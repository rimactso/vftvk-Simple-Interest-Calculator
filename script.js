function compute()
{
    var lf =String.fromCharCode(13);
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years=document.getElementById("years").value;
    var interest=(principal*years*rate)/100;
    var d = new Date();
    var y = d.getFullYear();
    year=y+(years*1);
    spans=document.getElementsByTagName("span");
    spans=document.getElementsByTagName("span");
        spans[1].innerHTML= "If you deposit <a class=yellow>"+principal+",</a><br/>"+lf+
"at an interest rate of <a class=yellow>"+spans[0].innerHTML+"</a>,<br/>"+lf+
"You will receive an amount of <a class=yellow>"+interest+"</a>,<br/>"+lf+
"in the year <a class=yellow>"+year+"</a>";
}
function readRange()
{
rate=document.getElementById("rate").value;
spans=document.getElementsByTagName("span");
spans[0].innerHTML=rate+"%";
}
