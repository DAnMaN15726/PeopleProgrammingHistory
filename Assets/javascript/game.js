let score = 0;
var arrayA = ["Who is the one who created the C++ coding language?", "Who created the Java programming language?"];




// Handles which question is asked //
function theQuestion(){

    
    
    var Y = Math.floor(Math.random() * arrayA.length);
    var X = prompt(arrayA[Y]);
    let arrayHold = [X , Y];

    return arrayHold;
}




// Determines what happens with the answer provided //
function theAnswer(array){
    var arrayB = ["bjarne stroustrup", "james gosling"]
    
    let p = array[0].toLowerCase();
    if (p === arrayB[array[1]] ){

        prompt("GJ!");
        scoreKeep(true);
    }
    else{

        document.writeln("WRONG!");
        return false;
        scoreKeep(false);
        
    }

    theAnswer(theQuestion());



}



function scoreKeep(verdict){

    if( verdict === true){

        document.write(`Your score is: ${score = score + 1}`);


    }
    else{
        
        document.write(`You lost 1 point: ${score = score - 1}`);

    }

}




function guessLeft(){



}













function hintSystem(){

}














// Basic start//
theAnswer(theQuestion());