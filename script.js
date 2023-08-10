const symbols = ['❤️', '💎', '🍀', '7️', '🍒'];
let balance = 20; // Initial balance

//Randomizer
function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Initialize net winnings
let netWinnings = 0;

function spinSlots() {
  if (balance >= 1) {
    balance -= 1; // Deduct $1 for each spin
    
    // Change item heading while spinning
    const itemHeading = document.querySelector('.item-heading');
    itemHeading.textContent = 'Hold yer horses...';
    
    const spinDuration = 2000; // Time in milliseconds
    const updateInterval = 100; // Update interval in milliseconds
    const slotContainer1 = document.getElementById('slot1');
    const slotContainer2 = document.getElementById('slot2');
    const slotContainer3 = document.getElementById('slot3');
    const forNowDisplay = document.querySelector('.fornow');

    let startTime = Date.now();

    // Stop spinning slots
    function updateSlots() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime < spinDuration) {
        slotContainer1.textContent = getRandomSymbol();
        slotContainer2.textContent = getRandomSymbol();
        slotContainer3.textContent = getRandomSymbol();

        setTimeout(updateSlots, updateInterval);
      } else {
        // After spinDuration has passed, set final symbols
        const finalSymbol1 = getRandomSymbol();
        const finalSymbol2 = getRandomSymbol();
        const finalSymbol3 = getRandomSymbol();

        // Record outcome
        slotContainer1.textContent = finalSymbol1;
        slotContainer2.textContent = finalSymbol2;
        slotContainer3.textContent = finalSymbol3;

        // Check if all symbols are the same
        const isWin = finalSymbol1 === finalSymbol2 && finalSymbol2 === finalSymbol3;
        if (isWin) {
          let winAmount = 10; // Base win amount
          if (finalSymbol1 === '❤️') winAmount += 5; // Add $5
          if (finalSymbol1 === '🍀') winAmount += 5; // Add $5 
          if (finalSymbol1 === '💎') winAmount += 10; // Add $10 
          if (finalSymbol1 === '7') winAmount += 15; // Add $15 
          balance += winAmount;
          itemHeading.textContent = `Winner!!! $${winAmount} win!`;
          netWinnings += winAmount; // Add winnings to netWinnings
        } else {
          itemHeading.textContent = 'Try again pardner';
          netWinnings -= 1; // Deduct spin cost from netWinnings
        }

        // Update balance display
        const balanceDisplay = document.querySelector('.balance');
        balanceDisplay.textContent = `$${balance}`;

        // Update net winnings display
        forNowDisplay.textContent = `$${netWinnings}`;

        console.log('Spin stopped with symbols:', finalSymbol1, finalSymbol2, finalSymbol3);
      }
    }

    updateSlots();
  } else {
    console.log('Insufficient balance to spin.');
        // Change item heading while spinning
    const itemHeading = document.querySelector('.item-heading');
    itemHeading.textContent = 'Yer broke buster!';
  }
}

// Button click event listener
document.addEventListener('DOMContentLoaded', () => {
  const spinButton = document.getElementById('large-spin-button');
  spinButton.addEventListener('click', () => spinSlots());

  // Initialize balance display
  const balanceDisplay = document.querySelector('.balance');
  balanceDisplay.textContent = `$${balance}`;
});
