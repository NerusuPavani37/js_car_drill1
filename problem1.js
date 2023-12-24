function problem1(inventory,id){//function call with array parameter and car id
     for(let i=0;i<inventory.length;i++){
        if(inventory[i].id==id){
            return inventory[i];//checking amd returning the needed object of car
        }
     }
}
module.exports=problem1;//exporting