// Fido
    let puzzles = [];
    let currentPuzzle = {};

    async function generatePuzzle() {
      const response = await fetch(
        "https://raw.githubusercontent.com/ananduremanan/Demo/main/puzzle.json"
      );
      puzzles = await response.json();
      const randomIndex = Math.floor(Math.random() * puzzles.length);
      currentPuzzle = puzzles[randomIndex];
      document.getElementById("puzzle").innerHTML = currentPuzzle.puzzle;
    }

    function revealAnswer() {
      document.getElementById("puzzle").innerHTML = currentPuzzle.answer;
    }

    window.onload = generatePuzzle;
    document.getElementById("puzzle").onclick = revealAnswer;

    // Fun
    console.log(`   _____   ____     _____ 
  / ____| |  _ \\   / ____|
 | |  __  | |_) | | (___  
 | | |_ | |  _ <   \\___ \\ 
 | |__| | | |_) |  ____) |
  \\_____| |____/  |_____/ `);
