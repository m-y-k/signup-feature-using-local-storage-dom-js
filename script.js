// JavaScript: signup.js
// 1st -> sign up

var signupBtn = document.getElementsByClassName('submit')[0];
const errorField = document.getElementById('error-msg');
// errorField.style.display = 'none';
// localStorage.clear();
let programRun = 0;
// if local storage has user signup -> 1. automatic login 2. ask for signup


if (programRun === 0) {
    function checkSignUp() {
        if (localStorage.getItem('user')) {
            // open profile page
            var newPage = 'profile.html';
            window.location.href = newPage;
            let i = 0;
            console.log('profile page opened', i);
            i++;
            // show user's info on profile page
            displayUserInfo();
            return;
        }
        if (signupBtn === null) {
            console.log('sign up btn is null');
        }else {
            console.log('sign up btn found')
        }
        try {
            signupBtn.addEventListener('click', (event) => {
                console.log('signUp func called');
                event.preventDefault();
                // ask for sign up
                var info = document.getElementsByClassName('entries');
                var username = info[0].value.trim();
                var email = info[1].value.trim();
                var password = info[2].value.trim();
                var accessToken = generateAccessToken(16);
        
                // const username = document.getElementById('name').value.trim();
                // const email = document.getElementById('email').value.trim();
                // const password = document.getElementById('password').value.trim();
                // const accessToken = generateAccessToken(16);
        
                // if any field is empty
                if (username === '' || email === '' || password === '') {
                    errorField.innerText = 'Error: All fields are mandatory!';
                    errorField.style.display = 'block';
                    // return 'entry / entries are null';
                } else {
                    const user = {
                        username: username,
                        email: email,
                        password: password,
                        accessToken: accessToken
                    };
                    // window.location.href = 'profile.html';
                // console.log('profile page opened');
                    // Store the user object in local storage
                    localStorage.setItem('user', JSON.stringify(user));
                    checkSignUp();
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    programRun++;
    console.log(programRun);
}
checkSignUp();

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
    let i = 0;
    console.log('user info func called', i);
    i++;
    if (localStorage.getItem('user')) {
        console.log('user item is true');
    } else {
        console.log('user not found');
    }
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    var infoBox = document.getElementsByClassName('pro-info'); // array
    // infoBox.innerHTML = 'hii';

    infoBox[0].innerText = `Full Name : ${user.username}`;
    infoBox[1].innerText = `Email : ${user.email}`;
    infoBox[2].innerText = `Token : ${user.accessToken}`;
    infoBox[3].innerText = `Password : ${user.password}`;
    // infoBox.innerHTML = `
    //     <p>Full Name : ${user.username}</p>
    //     <p>Email : ${user.email}</p>
    //     <p>Token : ${user.accessToken}</p>
    //     <p>Password : ${user.password}</p>
    // `;
}
let i = 0;
console.log('tst', i);
i++;
// 2nd -> sign out

const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    console.log('log out btn found');
}
try {
    logoutBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
        console.log('home page opened');
        localStorage.clear();
    });
} catch(error) {
    console.log(error);
}
