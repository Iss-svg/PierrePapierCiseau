function play(playerChoice) {
    const choices = ['pierre', 'papier', 'ciseaux'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    // Affiche les choix du joueur et de l'ordinateur
    document.getElementById('player-result').innerText = playerChoice;
    document.getElementById('computer-result').innerText = computerChoice;
  
    // Détermine le résultat
    let resultMessage;
    const animationArea = document.getElementById('animation-area');
    animationArea.innerHTML = ''; // Réinitialise l'animation précédente
  
    if (playerChoice === computerChoice) {
      resultMessage = `Égalité ! Vous avez tous les deux choisi ${playerChoice}.`;
    } else if (
      (playerChoice === 'pierre' && computerChoice === 'ciseaux') ||
      (playerChoice === 'papier' && computerChoice === 'pierre') ||
      (playerChoice === 'ciseaux' && computerChoice === 'papier')
    ) {
      resultMessage = `Vous gagnez ! ${playerChoice} bat ${computerChoice}.`;
      addAnimation(playerChoice, computerChoice, true);
    } else {
      resultMessage = `Vous perdez ! ${computerChoice} bat ${playerChoice}.`;
      addAnimation(computerChoice, playerChoice, false);
    }
  
    // Affiche le résultat
    const resultElement = document.getElementById('result');
    resultElement.innerText = resultMessage;
  
    // Réinitialise et relance l'animation du texte du résultat
    resultElement.style.opacity = '0';
    void resultElement.offsetWidth;
    resultElement.style.opacity = '1';
  }
  
  // Fonction pour ajouter les animations
  function addAnimation(winner, loser, playerWon) {
    const animationArea = document.getElementById('animation-area');
    let winnerIcon, loserIcon, animationClass;// Définir les icônes et animations selon les règles
    if (winner === 'pierre' && loser === 'ciseaux') {
      winnerIcon = '🪨';
      loserIcon = '✂️';
      animationClass = 'crush';
    } else if (winner === 'papier' && loser === 'pierre') {
      winnerIcon = '📄';
      loserIcon = '🪨';
      animationClass = 'wrap';
    } else if (winner === 'ciseaux' && loser === 'papier') {
      winnerIcon = '✂️';
      loserIcon = '📄';
      animationClass = 'cut';
    }
  
    // Crée les éléments pour l'animation
    const winnerElement = document.createElement('div');
    winnerElement.classList.add('icon');
    winnerElement.innerText = winnerIcon;
  
    const loserElement = document.createElement('div');
    loserElement.classList.add('icon', animationClass);
    loserElement.innerText = loserIcon;
  
    // Ajoute les éléments dans la zone d'animation
    animationArea.appendChild(winnerElement);
    animationArea.appendChild(loserElement);
  }