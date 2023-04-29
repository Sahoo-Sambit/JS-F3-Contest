const user = JSON.parse(localStorage.getItem('user'));
if (!user || !user.accessToken) {
  window.location.href = "index.html";
}

// Display the user's details
document.getElementById('name').innerText = user.name;
document.getElementById('email').innerText = user.email;
document.getElementById('password').innerText = user.password;

// Add a click event listener to the logout button
document.getElementById('logout-btn').addEventListener('click', () => {
  // Remove the user object from local storage
  localStorage.removeItem('user');

  // Redirect to the signup page
  window.location.href = "index.html";
});
