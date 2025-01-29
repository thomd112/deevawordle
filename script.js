// Function to change the word displayed in the wordGrid
function changeWord(word) {
    const wordGrid = document.getElementById("wordGrid");
    wordGrid.innerHTML = ""; // Clear previous word

    // Create letter tiles for each letter of the word and add them to wordGrid
    for (let letter of word) {
        let block = document.createElement("div");
        block.textContent = letter;
        wordGrid.appendChild(block);
    }

    // Apply style changes to the button clicked
    const clickedButton = event.target; // Get the button that was clicked
    
    // Change the button's background color, text transformation, and other styles
    clickedButton.style.backgroundColor = "green"; // Change background color
  

    clickedButton.style.animationPlayState = "paused"; // Pause animation on click
}


function moveButtonRandomly(button) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

 
    const randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

   
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}


const buttons = document.querySelectorAll('.button-box button');
buttons.forEach(button => {
    setInterval(() => moveButtonRandomly(button), 2000);  
});


