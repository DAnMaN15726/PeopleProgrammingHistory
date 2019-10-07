var arrayA = ["Who is the one who created the C++ coding language?", "Who created the Java programming language?"];
function theQuestion(){

    
    
    var Y = Math.floor(Math.random() * arrayA.length);
    var X = prompt(arrayA[Y]);

    return (X, Y);
}

function theAnswer( X, Y){
    var arrayB = ["A", "B"]
    
    let p = arrayB[Y];
    if (p === "A" ){
        prompt("GJ!");
    }
    else{
        document.writeln("WRONG!");
    }





}


function hintSystem(){

}















theAnswer(theQuestion());