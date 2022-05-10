function rotate(dateAvailable, luukkuNro, kuva){
  var date2 = (new Date());
  var text1 = parseFloat(date2.toLocaleDateString());
  var nyt1 = dateAvailable;
  
    

if ( text1 >= nyt1 ){ //tänne pitäs saaha css tyylien poisto ja linkki tapahtumaan 
 
    document.getElementById(luukkuNro).style.transform = "rotateY(180deg)";


    //setTimeoutID = setTimeout(function () {
    //document.getElementById("luukku1taka").style.transform = "rotateY(180deg)";}, 2000);
    
    

} else {
    window.alert("EI VIELÄ");
}
}