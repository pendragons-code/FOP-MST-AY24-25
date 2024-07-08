//============================I M P O R T A N T   N O T E S ========================================= 
//  1. You are NOT allowed to use any built-in sorting, array functions or sorting libraries
//     in your solution. The followings are NOT allowed : forEach(), Math.max(), Math.min(),
//     indexOf(), for (let element of ...), you must use the for loop syntax given on Page 3 of 
//     the question paper if you are coding for loop
//  2. You are ALLOWED to use : Math.floor(), Math.abs(), toFixed(), isNAN()
//  3. Do not change any of the given the codes below
//===================================================================================================

//--------------------------------------------
/* Question 1 : Add 3 comment lines 
//--------------------------------------------
Name  : Tan Ah Meng 
Class : DIT/FT/1A/993 
Admin No : 240123

*/
//---------------------------------------------------------------------------------
// Question 2 : Fill in the blanks with the most appropriate data types 
//---------------------------------------------------------------------------------
/*
Answer key :
1. Address                  : string
2. Cinema rating            : Floating point/Floating/Floating numbers/numbers
3. Average daily revenue    : Floating point/Floating/Floating numbers/numbers 
4. Max daily screenings     : integer/numbers
5. Support 3D Movies?       : boolean
6. Seating Capacity         : integer/numbers
*/

// Given the followings:
const input = require('readline-sync');
const movieInfo   = ["ABBA", "War", "Doom", "Joker", "Cheers"];
const ratingInfo  = [8.6, 6.3, 7.4, 9.5, 7.9];
const durationInfo= [144, 45, 175, 150, 120];

const address = "45 Orchard";
const rating = 8.5; 
const avgDailyRev = 45000;
const maxScreen = 12;
const screen3D = true;
const capacity = 350;


//----------------------------------------------------------------
// Question 3 : displayCinema function
// Display address & max daily screening
//----------------------------------------------------------------
function displayCinema(cinemaAddress, maximumNoScreen){                      
    console.log("\nStarlight,located at " + cinemaAddress + " has " + maximumNoScreen + " maximum screenings daily.");  
}                                

displayCinema(address,maxScreen);   


//----------------------------------------------------------------
// Question 4 : displayMovie function 
//----------------------------------------------------------------
function displayMovie(movieArray){                        
    console.log("\nNo.\tMovie Title");                  
    for (let i=0; i<movieArray.length; i++) {          
        console.log((i+1) + ".\t" + movieArray[i]);     
    }
}

displayMovie(movieInfo);                            


//----------------------------------------------------------------
// Question 5 : displayRating function
//----------------------------------------------------------------
function displayRating(){                                               
    let movieIndex = parseInt(input.question("\nEnter a movie number (1-5) to check the rating : "));      
    console.log(movieInfo[movieIndex-1] + " has rating of " + ratingInfo[movieIndex-1]);
}

displayRating();                          

//--------------------------------------------------------------------------------
// Question 6 : displayConvertDuration function
//--------------------------------------------------------------------------------

function displayConvertDuration(movieArray, durationArray) {   
    // Prompt the user for a movie name
    let movieName = input.question("\nEnter a movie name for the duration: ");    
    // Initialize duration variable to store the duration of the required movie
    let duration;
    let movieIndex;

    // Find the index of the movie in movieInfo array      
    for (let i = 0; i < movieArray.length; i++) {       
        if (movieArray[i] == movieName) {               
            movieIndex = i;
        }
    }
 
    // Retrieve the duration of the required movie from durationInfo array
    duration = durationArray[movieIndex];                
    // Convert duration to hours and minutes format       
    let hours = Math.floor(duration / 60);                  
    let minutes = duration % 60;                           
 
    // Initialize an empty string to store the result
    let result = movieName + " is ";           
    // Check if hours is not zero
    if (hours !== 0) {                                     
        result += hours + "hr(s) ";
    }

    // Check if minutes is not zero                        
    if (minutes !== 0) {
        result += minutes + "min(s)";
    }

    // Return the result
    return result;                                        
}

console.log(displayConvertDuration(movieInfo, durationInfo));    


//------------------------------------------------------------------------------------------------
// Question 7 : compareRating function
// To compare rating of the lowest movie rating against average rating of all movies
// indexOf() not allowed to be used
//------------------------------------------------------------------------------------------------
function compareRating(ratingArray, movieArray){                
    //find average rating
    let sum = 0;
    let average;
    let lowest = ratingArray[0];
    let lowestIndex = 0;
    // find average rating
    for (let i=0; i<ratingArray.length; i++) {                
        sum = sum + ratingArray[i];       
    }

    //find lowest rating
    for (let i=1; i<ratingArray.length; i++) {                
        if (ratingArray[i] < lowest){
            lowest = ratingArray[i];
            lowestIndex = i;  
        }                           
    }
    
    average = sum /ratingArray.length;                       
      
    return ("\nMovie " + movieArray[lowestIndex] + " has the lowest rating of " + lowest + "\nAverage rating is " + (average.toFixed(1)) 
    + "\nDifference is " + (Math.abs(average - lowest)).toFixed(1));  
}

console.log(compareRating(ratingInfo, movieInfo));        


//---------------------------------------------------------------------------------------------
// Question 8 : displayMenu function
// Built-in validation provided by readline-sync library is NOT allowed.
//---------------------------------------------------------------------------------------------
function displayMenu(){                                                         
    console.log("\nMenu:");                   
    console.log("1. Cinema Details");
    console.log("2. Movie Titles");
    console.log("3. Movie Rating");
    console.log("4. Convert Duration");
    console.log("5. Compare Rating");
    console.log("0. Exit");
}

// main program

displayMenu();
let result=true;
let choice = parseInt(input.question("\nEnter an option 1-5, or 0 to exit: "));    

while (result){                                                                     
    if (choice < 0 || choice > 5 || isNaN(choice))                                  
        console.log("Invalid choice, please re-enter 0 to 5 only")                 
 
    if (choice == 1)                                                         
        displayCinema(address,maxScreen)

    if (choice == 2)                                                      
        displayMovie(movieInfo);

    if (choice == 3) {                                                   
        displayMovie(movieInfo);          
        displayRating();
    }
    if (choice == 4)                                                             
        console.log(displayConvertDuration(movieInfo, durationInfo));

    if (choice == 5)                                                            
        console.log(compareRating(ratingInfo, movieInfo)); 

    if (choice == 0){                                                             
        result = false;
        console.log("Goodbye")
    }
    else {                                                                          
        displayMenu();                                                             
        choice = parseInt(input.question("\nEnter an option 1-5, or 0 to exit :"));      
    }
}
