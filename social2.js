



var countDownDate1 = new Date("Mar 12, 2022 10:37:25").getTime();


var x1 = setInterval(function() {

  
  var now1 = new Date().getTime();
    

  var distance1 = now1 - countDownDate1;
    
 
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
    

  document.getElementById("timer1").innerHTML = days1 + "d " + hours1 + "h "
  + minutes1 + "m " + seconds1 + "s Ago";
    
   
  
}, 1000);



var countDownDate2 = new Date("Mar 12, 2022 08:37:25").getTime();


var x2 = setInterval(function() {

  var now2 = new Date().getTime();
    

  var distance2 = now2 - countDownDate2;
    
  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
    

  document.getElementById("timer2").innerHTML = days2 + "d " + hours2 + "h "
  + minutes2 + "m " + seconds2 + "s Ago";
    
}, 1000);


var countDownDate3 = new Date("Mar 12, 2022 05:37:25").getTime();


var x3 = setInterval(function() {

  
  var now3 = new Date().getTime();
    

  var distance3 = now3 - countDownDate3;
    
 
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);
    

  document.getElementById("timer3").innerHTML = days3 + "d " + hours3 + "h "
  + minutes3 + "m " + seconds3 + "s Ago";
    
   
  
}, 1000);



var countDownDate4 = new Date("Mar 12, 2022 02:37:25").getTime();


var x4 = setInterval(function() {

  var now4 = new Date().getTime();
    

  var distance4 = now4 - countDownDate4;
    
  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);
    

  document.getElementById("timer4").innerHTML = days4 + "d " + hours4 + "h "
  + minutes4 + "m " + seconds4 + "s Ago";
    
}, 1000);


var countDownDate5 = new Date("Mar 11, 2022 19:37:25").getTime();


var x5 = setInterval(function() {

  
  var now5 = new Date().getTime();
    

  var distance5 = now5 - countDownDate5;
    
 
  var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);
    

  document.getElementById("timer5").innerHTML = days5 + "d " + hours5 + "h "
  + minutes5 + "m " + seconds5 + "s Ago";
    
   
  
}, 1000);



var countDownDate6 = new Date("Mar 11, 2022 04:37:25").getTime();


var x6 = setInterval(function() {

  var now6 = new Date().getTime();
    

  var distance6 = now6 - countDownDate6;
    
  // Time calculations for days, hours, minutes and seconds
  var days6 = Math.floor(distance6 / (1000 * 60 * 60 * 24));
  var hours6 = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds6 = Math.floor((distance6 % (1000 * 60)) / 1000);
    

  document.getElementById("timer6").innerHTML = days6 + "d " + hours6 + "h "
  + minutes6 + "m " + seconds6 + "s Ago";
    
}, 1000);