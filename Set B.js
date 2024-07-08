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
2. Agency rating            : Floating point/Floating/Floating numbers/numbers
3. Average daily revenue    : Floating point/Floating/Floating numbers/numbers
5. Public listed?           : boolean
6. Number of employees      : integer/numbers
*/

// Given the followings:
const input = require('readline-sync');
const eventInfo   = ["Superb", "OhNo", "BestMum", "Walk Talk", "ChocHut"];
const ratingInfo  = [7.5, 5.3, 9.4, 8.5, 7.9];
const durationInfo= [156, 35, 255, 180, 110];

const address = "600 KingRoad";
const rating = 9.5; 
const avgDailyRev = 7800;
const maxShoot = 12;
const publicList = false;
const employee = 50;


//----------------------------------------------------------------
// Question 3 : displayAgency function
// Display address & number of employees  
//----------------------------------------------------------------
function displayAgency(agencyAddress, maximumNoShoot){                      
    console.log("\nYouShine,located at " + agencyAddress + " has " + maximumNoShoot+ " maximum shoots daily.");  
}                                                       

displayAgency(address,maxShoot);      

//----------------------------------------------------------------
// Question 4 : displayEvent function
// Display all event names 
//----------------------------------------------------------------
function displayEvent(eventArray){                        
    console.log("\nNo.\tEvent Title");                    
    for (let i=0; i<eventArray.length; i++) {             
        console.log((i+1) + ".\t" + eventArray[i]);      
    }
}

displayEvent(eventInfo);                          


//----------------------------------------------------------------
// Question 5 : displayRating function
// Display movie rating upon user input 
//----------------------------------------------------------------
function displayRating(){                                               
    let eventIndex = parseInt(input.question("\nEnter an event number (1-5) to check the rating : ")); 
    console.log(eventInfo[eventIndex-1] + " has rating of " + ratingInfo[eventIndex-1]); 
}

displayRating();                                                    


//--------------------------------------------------------------------------------
// Question 6 : displayConvertDuration function
// Convert timing of a event and display timing in converted format 
// indexOf() not allowed to cannot be used
//--------------------------------------------------------------------------------

function displayConvertDuration(eventArray, durationArray) {   
    // Prompt the user for a event name
    let eventName = input.question("\nEnter an event name for the duration: ");       
    // Initialize duration variable to store the duration of the required event
    let duration;
    let eventIndex;

    // Find the index of the event in eventInfo array      
    for (let i = 0; i < eventArray.length; i++) {       
        if (eventArray[i] == eventName) {               
            eventIndex = i;
        }
    }
 
    // Retrieve the duration of the required event from durationInfo array
    duration = durationArray[eventIndex];                  
 
    // Convert duration to hours and minutes format        
    let hours = Math.floor(duration / 60);                  
    let minutes = duration % 60;                           
 
    // Initialize an empty string to store the result
    let result = eventName + " is ";           
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

console.log(displayConvertDuration(eventInfo, durationInfo));     


//------------------------------------------------------------------------------------------------
// Question 7 : compareRating function
// To compare rating of the highest event rating against average rating of all events 
// indexOf() not allowed to be used
//------------------------------------------------------------------------------------------------
function compareRating(ratingArray, eventArray){               
    //find average rating
    let sum = 0;
    let average;
    let highest = ratingArray[0];
    let highestIndex = 0;
    // find average rating
    for (let i=0; i<ratingArray.length; i++) {             
        sum = sum + ratingArray[i];       
    }

    //find highest rating
    for (let i=1; i<ratingArray.length; i++) {               
        if (ratingArray[i] > highest){
            highest = ratingArray[i];
            highestIndex = i;  
        }                           
    }
    
    average = sum /ratingArray.length;                       
      
    return ("\nEvent " + eventArray[highestIndex] + " has the highest rating of " + highest + "\nAverage rating is " + (average.toFixed(1)) 
    + "\nDifference is " + (Math.abs(average - highest)).toFixed(1));  

}

console.log(compareRating(ratingInfo, eventInfo));        


//---------------------------------------------------------------------------------------------
// Question 8 : displayMenu function
// To display menu for user to select respective function, loop and data validation 
// Built-in validation provided by readline-sync library is NOT allowed.
//---------------------------------------------------------------------------------------------
function displayMenu(){                                                            
    console.log("\nMenu:");                            
    console.log("1. Agency Details");
    console.log("2. Event Titles");
    console.log("3. Event Rating");
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
        displayAgency(address,maxShoot)

    if (choice == 2)                                                                
        displayEvent(eventInfo);

    if (choice == 3) {                                                              
        displayEvent(eventInfo);            
        displayRating();
    }
    if (choice == 4)                                                               
        console.log(displayConvertDuration(eventInfo, durationInfo));

    if (choice == 5)                                                               
        console.log(compareRating(ratingInfo, eventInfo)); 

    if (choice == 0){                                                               
        result = false;
        console.log("Goodbye")
    }
    else {                                                                          
        displayMenu();                                                                  
        choice = parseInt(input.question("\nEnter an option 1-5, or 0 to exit :"));     
    }
}
