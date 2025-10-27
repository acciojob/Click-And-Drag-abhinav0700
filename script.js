// Your code here.
// Select all cube elements
const cubes = document.querySelectorAll('.item');
let selectedCube = null;
let offsetX = 0;
let offsetY = 0;

// Add event listeners to each cube
cubes.forEach(cube => {
  cube.style.position = 'absolute'; // allow movement
  const rect = cube.getBoundingClientRect();
  cube.style.left = rect.left + 'px';
  cube.style.top = rect.top + 'px';

  cube.addEventListener('mousedown', (e) => {
    selectedCube = cube;
    const cubeRect = cube.getBoundingClientRect();
    offsetX = e.clientX - cubeRect.left;
    offsetY = e.clientY - cubeRect.top;
    cube.style.cursor = 'grabbing';
  });
});

// Mouse move handler
document.addEventListener('mousemove', (e) => {
  if (!selectedCube) return;

  const container = document.querySelector('.items');
  const containerRect = container.getBoundingClientRect();
  const cubeRect = selectedCube.getBoundingClientRect();

  let newX = e.clientX - containerRect.left - offsetX;
  let newY = e.clientY - containerRect.top - offsetY;

  // Boundary constraints
  newX = Math.max(0, Math.min(newX, containerRect.width - cubeRect.width));
  newY = Math.max(0, Math.min(newY, containerRect.height - cubeRect.height));

  selectedCube.style.left = newX + 'px';
  selectedCube.style.top = newY + 'px';
});

// Mouse release handler
document.addEventListener('mouseup', () => {
  if (selectedCube) {
    selectedCube.style.cursor = 'grab';
    selectedCube = null;
  }
});
