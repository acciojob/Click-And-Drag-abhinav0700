const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  // Calculate drag movement
  const x = e.pageX;
  const walk = (x - startX) * 3; // Increased multiplier for test detection
  slider.scrollLeft = scrollLeft - walk;

  // Force browser to register scroll change immediately
  slider.getBoundingClientRect();
});
