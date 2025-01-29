
function changeWord(word) {
    const wordGrid = document.getElementById("wordGrid");
    wordGrid.innerHTML = ""; 

   
    for (let letter of word) {
        let block = document.createElement("div");
        block.textContent = letter;
        wordGrid.appendChild(block);
    }

    
    const clickedButton = event.target; 
    clickedButton.style.backgroundColor = "#cae6ce"; 
    clickedButton.style.transform = "rotate(360deg)"; 
  
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


const buttons = document.querySelectorAll('.primary-box button');
buttons.forEach(button => {
    setInterval(() => moveButtonRandomly(button), 2000);  
});


