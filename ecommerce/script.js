// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple authentication logic (replace with real authentication)
    if (username === 'admin' && password === 'password') {
      // Redirect to main page
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password');
    }
  });
  