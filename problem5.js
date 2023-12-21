
function problem5(inventory){//fun call with array parameter
    let years_oldCars=[];//empty array
    let year = 2000; //given year is stored in variable
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].car_year < year){
            years_oldCars.push(inventory[i].car_year);//checking and pushing
        }
    }
    return years_oldCars;//returning
}

module.exports=problem5;//exporting the function