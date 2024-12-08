const container = document.querySelector('.container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

signUpButton.addEventListener('click', () => {
  container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
  container.classList.remove('right-panel-active');
});

// Handle Sign Up
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value;

  // Validate inputs
  if (name && email && password) {
    const user = { name, email, password };
    localStorage.setItem('user', JSON.stringify(user)); // Save user data in localStorage
    alert('Account created successfully! Please log in.');
    container.classList.remove('right-panel-active'); // Switch to login view
  } else {
    alert('Please fill in all fields.');
  }
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user data from localStorage

  // Validate user credentials
  if (user && user.email === email && user.password === password) {
    alert(`Welcome back, ${user.name}!`);
    window.location.href = './dashboard.html'; // Redirect to dashboard
  } else {
    alert('Invalid email or password.');
  }
});
