//nconsole.log("hello sakshi")
//data type->
//primitive ->int , float , double
//non-primitive-> arrays, tacks



//javascript->Number(int , float, double)., 
//boolean, string,(" ", ''), und4efined,null,object
let a=10;//you have declare a variable with name and initalise it with 10
if(true)
{
    //let keyword block scoped
    let a=20;
  //  console.log(a);
}
//console.log(a);
//const->constant
//declare and initalization are done at one time
const pi =3.14;
//array
let values=[1,2,3,4,5,6,7,8];
//console.log(values);
values.push("sakshi jaiswal");
//console.log(values);
values.pop();
//console.log(values);
//shift->delete a element from starting
//unshift-> add a elemnet to the starting
//console.log(values.shift());
let obj={
    name:"sakshi ",
    movies: ['captian america!','marvel',{
        bestie: 'vansh',
        weekness:'brainwash',
        strength: 'hard-wroking',
    }]
}
console.log(obj.movies[2].strength[4].substring(5));
//get value of any key{key is always unique values}
//dot operator is used to get the key value.(literal check up)
//console.log(obj.name);
//square bracket is used for finding values of key.
//console.log(obj["name"]);
///if a key of typw string then dot operator doesnot work
obj.skil=['dancing','singing'];
obj.name='vansh';
//console.log(obj);


