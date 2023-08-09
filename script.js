const symbols = ['❤️', '💎', '🍀', '🎰', '🍒'];
//Symbols to populate slots

let slotContainer1 = document.getElementById('slot1');
let slotContainer2 = document.getElementById('slot2');
let slotContainer3 = document.getElementById('slot3');
//.slot class selected with constant

function getRandomSymbol() {
  return symbols[Math.floor(Math.random()*5)];
}

function spinSlots() {
  const sym1 = getRandomSymbol();
  const sym2 = getRandomSymbol();
  const sym3 = getRandomSymbol();

  slotContainer1.textContent = sym1;
  slotContainer2.textContent = sym2;
  slotContainer3.textContent = sym3;

  console.log(sym1);
}
//Logic for slot randomizer



document.addEventListener('DOMContentLoaded', () => {
  console.log('spin?')  
  let spinButton = document.getElementById('large-spin-button');
    spinButton.addEventListener('click', () => spinSlots());
    
    // Call spinSlots() function after the HTML document has been loaded
    
});
