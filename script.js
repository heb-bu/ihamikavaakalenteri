
function checkDate(dateAvailable, luukkuNro, kuva){
    var date2 = (new Date());
    var text1 = parseFloat(date2.toLocaleDateString());
    var nyt1 = dateAvailable;
    
      
  
  if ( text1 >= nyt1 ){ //tänne pitäs saaha css tyylien poisto ja linkki tapahtumaan 
      document.getElementById(luukkuNro).style.transform = "rotateY(.5turn)";
    //  document.getElementById(luukkuNro).style.webkit.transform = "rotateY(0deg)";
      //document.getElementById(luukkuNro).style.transform.style = "preserve-3d";
     // document.getElementById(luukkuNro).style.webkit.transform.style = "preserve-3d";
     $front.toggleClass('.container:hover .front')
      
      
  
  } else {
      window.alert("EI VIELÄ");
  }
  }

  
function rotate(dateAvailable, luukkuNro, kuva){
    var date2 = (new Date());
    var text1 = parseFloat(date2.toLocaleDateString());
    var nyt1 = dateAvailable;
    
      
  
  if ( text1 >= nyt1 ){ //tänne pitäs saaha css tyylien poisto ja linkki tapahtumaan 
     document.getElementById(luukkuNro).style.transform = "rotateY(180deg)";
    document.getElementById(luukkuNro).style.webkit.transform = "rotateY(0deg)";
      document.getElementById(luukkuNro).style.transform.style = "preserve-3d";
    document.getElementById(luukkuNro).style.webkit.transform.style = "preserve-3d";
      
  

     
      
 
  } else {
      window.alert("EI VIELÄ");
  }
  }
