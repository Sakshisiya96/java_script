//function in java_script
function fun(){
    console.log("hey! i m function");
}
//function call
fun();
// in js , a function is like a variable
let sayhi;
sayhi=function(){
    console.log("sayhi function");
}
sayhi();
// we can call a function from anywhere but if a funcion is behave like a variable
// then we can't say this line
function callback(){
    console.log("i am passed as a argument");
    return 5;
}
function highorderFunction(cb){
    let value=cb();
    console.log(value);
}
highorderFunction( callback);
//conclusion 
// high order function=> function which accepts function as a arguments!!
//call back function=> function which are passed as a arguments as a function!!