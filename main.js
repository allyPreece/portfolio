const card = document.querySelector('.glow-container');

card.addEventListener('mousemove', (e) => {
  // Get the bounding boundaries of the card
  const rect = card.getBoundingClientRect();

  // Calculate mouse position relative to the top-left of the card
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Update the card's specific CSS variables
  card.style.setProperty('--mouse-x', `${x}px`);
  card.style.setProperty('--mouse-y', `${y}px`);
});
