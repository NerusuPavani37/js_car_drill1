function problem6(inventory){ //fun call with array parameter
    let carsOfBMW_AUDI=[]; //empty array
    for(let i=0;i<inventory.length;i++){
          if(inventory[i].car_make==='BMW' || inventory[i].car_make==='Audi'){
            carsOfBMW_AUDI.push(inventory[i]);//pushing in to the array
          }
    }
    return carsOfBMW_AUDI; //returning array
}

module.exports=problem6;//exporting function
