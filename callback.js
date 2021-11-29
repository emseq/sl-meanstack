function node_Add(){
    const data = {name:"Emp01"}; 
    db_Add(data, callBack); 

}

const callBack = function Print(){
    console.log("data is added"); 
}


function db_Add(data, cb){
    // adds data 
    cb(); 

}

node_Add(); 