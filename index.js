const hours = document.getElementById("workingHours");
const display = document.getElementById("displayWorkingHours");

console.log(hours);

hours.addEventListener("change", function ()
{
 display.textContent = hours.value
 console.log(hours);
});



// const workingHours = document.getElementById("currentWorkingHours");

// workingHours.addEventListener(onkeydown("enter"));

// function displayWorkingHours(){
//     currentWorkingHours.textContent = updateWorkingHours
// }


// actualPlayerScore = actualPlayerScore+1;
// playerScore.textContent = actualPlayerScore;
// result.textContent = "You won";




// let slider = document.getElementById("myRange");
// let output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() { output.innerHTML = this.value; } 