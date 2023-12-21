function problem4(inventory){//fun call with array parameter
     let carYears=[];//empty array
     for(let i=0;i<inventory.length;i++){
          carYears[i]=inventory[i].car_year; //adding in to the array
     }
     return carYears;//returning array
}

module.exports=problem4;//exporting