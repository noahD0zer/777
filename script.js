const symbols = ['❤️', '💎', '🍀', '🎰', '🍒'];
const slotContainers = document.querySelectorAll('.slot');

function spinSlots() {
    slotContainers.forEach(slot => {
        const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
        slot.textContent = randomSymbol;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const spinButton = document.createElement('button');
    spinButton.textContent = 'Spin';
    spinButton.addEventListener('click', spinSlots);
    document.body.appendChild(spinButton);

    // Call spinSlots() function after the HTML document has been loaded
    spinSlots();
});
