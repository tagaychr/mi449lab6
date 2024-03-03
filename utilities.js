/*
// List of names
const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Harry", "Ivy", "Jack"];

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a random name
function displayRandomName() {
  const randomIndex = getRandomNumber(0, names.length - 1);
  const randomName = names[randomIndex];
  document.getElementById('randomName').textContent = randomName;
}

// Event listener for the button click
document.getElementById('randomNameBtn').addEventListener('click', displayRandomName);
*/


const names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Harry", "Ivy", "Jack"];

function getRandomName(){
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex]; 
}

const click = document.getElementById('randomNameBtn');

click.addEventListener("click", (event) => {
    document.getElementById('randomName').textContent = getRandomName();
});