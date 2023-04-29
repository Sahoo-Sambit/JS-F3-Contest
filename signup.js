// Get the form and the signup message element
const signupForm = document.getElementById('signup-form');
const signupMsg = document.getElementById('signup-msg');

// Add a click event listener to the signup button
document.getElementById('signup-btn').addEventListener('click', () => {
  // Get the input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  // Validate the input values
  if (name === '' || email === '' || password === '' || confirmPassword === '') {
    signupMsg.innerText = 'Error: All fields are mandatory';
    signupMsg.style.color = 'red';
    return;
  }
  if (password !== confirmPassword) {
    signupMsg.innerText = 'Passwords do not match';
    signupMsg.style.color = 'red';
    return;
  }

  // Generate a random access token
  const accessToken = generateAccessToken();

  // Create the user object with the input values and the access token
  const user = { name, email, password, accessToken };

  // Save the user object to local storage
  localStorage.setItem('user', JSON.stringify(user));

  // Show a success message and redirect to the profile page
  signupMsg.innerText = 'Successfully Signed Up!';
  signupMsg.style.color = 'green';
  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
});

// Function to generate a random 16-byte string
function generateAccessToken() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 16; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

