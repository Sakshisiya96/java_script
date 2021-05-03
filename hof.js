function getFirstName(fullname){
    //fullName ="STEVE ROGER" => STRING 
    fullName = fullName.split(" ");
    //["STEVE", "ROGERS"];
    return fullNmae[0];
}
function getLastName(fullName){
    fullName =fullName.split(" ");
    return fullName[1];
}


function fun(fullName , cb){
    let name =cb(fullName);
    console.log(name);
}


fun("steve Rogers", getLastName);
fun("Iron Man", getLastName);
//fun=>hof
//gFN , gLN = >callback function