
function problem3(inventory){//fun call with array parameter
      let carModels=[];//created empty array
      for(let i=0;i<inventory.length;i++){
          carModels[i]=inventory[i].car_model;//add all models of cars in to array
      }
      carModels.sort();//sorted the array
      return carModels;//returned the array
}

module.exports=problem3;//exporting 