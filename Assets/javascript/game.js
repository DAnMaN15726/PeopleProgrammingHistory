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
    var counter = 3;
    var arrayB = ["bjarne stroustrup", "james gosling"]
    
    while( counter !=0){
        let p = array[0].toLowerCase();
        if (p === arrayB[array[1]] ){

            prompt("GJ!");
            scoreKeep(true);
            theAnswer(theQuestion());
        }
        else{
            
            
            prompt("WRONG!");
        
            scoreKeep(false);
            counter = counter - 1;
            prompt(`You have ${counter} tries left`);
            if( counter === 0){
                break;
            }else{
                // This particular code recalls the SAME QUESTION to be asked again. //
                array[0] = prompt(arrayA[array[1]]);
            }

            
            
            

                
            
            
            
        }
    }
    return;
    



}


// Updates the score //
function scoreKeep(verdict){

    if( verdict === true){

        document.write(`Your score is: ${score = score + 1}`);


    }
    else{
        
        document.write(`You lost 1 point. Final score: ${score = score - 1}`);

    }

}















function hintSystem(){

}














// Basic start. THIS IS WHERE THE CODE IS EXECUTED//
theAnswer(theQuestion());