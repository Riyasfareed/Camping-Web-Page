var today = new Date();
var date = (today.getDay() + 13) +'/'+ (today.getMonth() + 1) +'/'+today.getFullYear();

document.getElementById("datetime").innerHTML = date;