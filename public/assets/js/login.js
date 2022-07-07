const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      let bodyResponse = await response.json();
      storeUsernameIntoLocalStorage(bodyResponse.username)
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      let bodyResponse = await response.json();
      storeUsernameIntoLocalStorage(bodyResponse.username)
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};

async function checkSession() {
  const response = await fetch('/api/users/', {
    method: 'GET'
  })

  if (response.ok) {
    // let bodyResponse = await response.json();
    // storeUsernameIntoSessionStorage(bodyResponse.username)

    // STOP DISPLAYING LOGIN BUTTON
    console.log(getUsernameFromLocalStorage())
    const loginButton = document.getElementsByClassName('login-button')[0]
    loginButton.remove()

    const buttonContainer = document.getElementsByClassName('button-container')[0]
    const usernameContainer = document.createElement('div')
    usernameContainer.innerHTML = `<p>Hello ${getUsernameFromLocalStorage()},</p>`
    buttonContainer.insertBefore(usernameContainer, buttonContainer.children[0])
  } else {
    clearUsernameInLocalStorage();
  } 
}

function storeUsernameIntoLocalStorage(username) {
  localStorage.setItem("currentUser", username)
}

function clearUsernameInLocalStorage() {
  localStorage.removeItem("currentUser")
}

// Get current logged in user
function getUsernameFromLocalStorage(username) {
  return localStorage.getItem("currentUser")
}

// Check session everytime the website loads or reloads.
checkSession()

const loginForm = document.querySelector('.login-form')
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}

const signupForm = document.querySelector('.signup-form')
if (signupForm) {
  signupForm.addEventListener('submit', signupFormHandler);
}
