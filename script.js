// JavaScript: signup.js
// 1st -> sign up

const errorField = document.getElementById('error-msg');
// errorField.style.display = 'none';

localStorage.clear();

let user = {};

document.addEventListener('DOMContentLoaded', function () {
    console.log("document object enabled");
    const signupForm = document.getElementById('submit-btn');

    signupForm.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("signup btn clicked");

        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const accessToken = generateAccessToken(16);

        // if any field is empty
        if (username === '' || email === '' || password === '') {
            errorField.innerText = 'Error: All fields are mandatory!';
            errorField.style.display = 'block';
            return;
        }

        user = {
            username: username,
            email: email,
            password: password,
            accessToken: accessToken
        };

        // Store the user object in local storage
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to another page or show a success message

        // For example:
        window.location.href = 'profile.html';
        console.log('profile page opened');
        // show user's info on profile page
        displayUserInfo();
    });
});

function generateAccessToken(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        accessToken += charset[randomIndex];
    }
    return accessToken;
}

function displayUserInfo() {
    console.log('info box called');
        const infoBox = document.getElementById('profile-info');
        infoBox.innerHTML = '';

        infoBox.innerHTML = `
            <p>Full Name : ${user.username}</p>
            <p>Email : ${user.email}</p>
            <p>Token : ${user.accessToken}</p>
            <p>Password : ${user.password}</p>
        `;
}


// 2nd -> sign out