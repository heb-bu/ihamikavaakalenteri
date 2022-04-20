function checkDate(dateAvailable){
    var date = (new Date());
    var date1 = (new Date());
    date.setDate(dateAvailable.substr(0, 2));
    date.setMonth(dateAvailable.substr(3, 2) -1);
    
    if ( date <= date1 ){
    window.alert("ok");
    } else {
    window.alert("EI VIELÄ");
    }
    }