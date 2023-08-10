const symbols = ['❤️', '💎', '🍀', '7️⃣', '🍒'];
let balance = 30; // Initial balance

function getRandomSymbol() { //symbol randomizer
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlots() {
  if (balance >= 1) {
    balance -= 1; // Deduct $1 for each spin

    const spinDuration = 2000; // Time in milliseconds
    const updateInterval = 100; // Update interval in milliseconds
    const slotContainer1 = document.getElementById('slot1');
    const slotContainer2 = document.getElementById('slot2');
    const slotContainer3 = document.getElementById('slot3');
    const itemHeading = document.querySelector('.item-heading');
    

    let startTime = Date.now();

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

        slotContainer1.textContent = finalSymbol1;
        slotContainer2.textContent = finalSymbol2;
        slotContainer3.textContent = finalSymbol3;

        // Check if all symbols are the same
        if (finalSymbol1 === finalSymbol2 && finalSymbol2 === finalSymbol3) {
          balance += 10; // Win $10 for a match
          itemHeading.textContent = 'Winner!!!';
        } else {
          itemHeading.textContent = 'Try again pardner';
        }

        // Update balance display
        const balanceDisplay = document.querySelector('.balance');
        balanceDisplay.textContent = `$${balance}`;

        console.log('Spin stopped with symbols:', finalSymbol1, finalSymbol2, finalSymbol3);
      }
    }

    updateSlots();
  } else {
    console.log('Insufficient balance to spin.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const spinButton = document.getElementById('large-spin-button');
  spinButton.addEventListener('click', () => spinSlots());

  // Initialize balance display
  const balanceDisplay = document.querySelector('.balance');
  balanceDisplay.textContent = `$${balance}`;
});
