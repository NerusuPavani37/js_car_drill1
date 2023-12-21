

function problem2(inventory,id){//fun call with array parameter
       for(let i=0;i<inventory.length;i++){
         if(inventory[i].id==id){
            return inventory[i];//checking and returning the needed object
         }
       }
}

module.exports=problem2;//export