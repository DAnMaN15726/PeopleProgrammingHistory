let score = 0;
// const arrayA = ["Who is the one who created the C++ coding language?", "Who created the Java programming language?"];
const guessA = [];


// The objects and array I can use for the hintSystem() //

//___________________________________________________________________________________________________________________________//




//___________________________________________________________________________________________________________________________//

// PROBLEM AREA
// Handles which question is asked //
function theQuestion(){
    let guessA = [3];
    let getID = document.GetElementById("Form").onClick;
    
    
    // let Y = Math.floor(Math.random() * arrayA.length);
    document.writeln(arrayA[Y]);
    console.log("text");
    
    
    let arrayHold = [X , Y];

    return arrayHold;
}




// Determines what happens with the answer provided //
function theAnswer(array){
    hintRef = array[1];                                             // I am using this variable to enter into the hint system.
    let counter = 3;                                                // This counter keeps track of the while loop and also keeps track of the number of tries left.
    const arrayB = ["bjarne stroustrup", "james gosling"]             // This is the array that has all of the answers. In a meticulous order.
    let x = -1;

    
    while( counter !=0){
        let p = array[0].toLowerCase();
        if (p === arrayB[array[1]] ){

            prompt("GJ!");
            scoreKeep(true);
            theAnswer(theQuestion());
        }
        else{
            
            
        
            scoreKeep(false);
            soFar(array[0])
            counter = counter - 1;
            x = x + 1;
            prompt(`WRONG! You have ${counter} tries left`);
            
            hintSystem(array[1], x);       console.log(array[1]);
            
            
            
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

        document.write(`Your score is: ${score = score + 1} `);


    }
    else{
        
        document.write(`You lost 1 point. Final score: ${score = score - 1} `);

    }

}















function hintSystem(varia, x){
    console.log(varia);
    // const BS = {firstName: "Bjarne", lastName: "Stroustrup"};
    // const JG = {firstName: "James", lastName: "Gosling"};
    // const arrayHint = [BS, JG];
    
    
    // prompt(Object.keys(arrayHint[varia])[varia]);
    // console.log(Object.keys(arrayHint[varia])[varia]);


    var d2Array = [
        ["First name is Bjarne", "Last name is Stroustrep", "He was born on December 30"],
        ["First name is James", "Last name is Gosling", "He made contributions for software systems like NeWS and Gosling Emacs"]
    ];
    


    console.log(d2Array[varia][x]);








}




function soFar(myGuesses){
    guessA.push(myGuesses);

    console.log(guessA);
    
    
}









// Basic start. THIS IS WHERE THE CODE IS EXECUTED//
// theAnswer(theQuestion());