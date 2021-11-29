const empID = (function(){
    let count = 0; 
    return function(){ 
        ++count; 
        return "emp"+count; 
    }; 
})(); 

console.log("emp01:"+empID);
console.log("emp02:"+empID);
console.log("emp03:"+empID);

