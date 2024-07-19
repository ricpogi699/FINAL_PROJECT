document.addEventListener('DOMContentLoaded', () => {
    // Activate category links
    const links = document.querySelectorAll('.category-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            links.forEach(otherLink => otherLink.classList.remove('active'));
            link.classList.add('active');
            setTimeout(() => {
                window.location = link.getAttribute('href');
            }, 0);
        });
    });

    // Update labels with animation
    document.querySelectorAll('label').forEach(label => {
        label.innerHTML = label.innerText.split('').map(
            (letter, i) => `<span style="transition-delay: ${i * 50}ms">${letter}</span>`
        ).join('');
    });

    // Handle sign-up form submission
    const signUpForm = document.getElementById('sign_up_form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(event) {
            event.preventDefault();
            let valid = true;

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Clear previous errors
            document.getElementById('username-error').textContent = '';
            document.getElementById('email-error').textContent = '';
            document.getElementById('password-error').textContent = '';
            document.getElementById('confirm-password-error').textContent = '';

            // Username validation
            if (username.length < 6) {
                document.getElementById('username-error').textContent = 'Username must be at least 6 characters long';
                valid = false;
            }

            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                document.getElementById('email-error').textContent = 'Invalid email address';
                valid = false;
            }

            // Password validation
            if (password.length < 8) {
                document.getElementById('password-error').textContent = 'Password must be at least 8 characters long';
                valid = false;
            }

            // Confirm Password validation
            if (password !== confirmPassword) {
                document.getElementById('confirm-password-error').textContent = 'Passwords do not match';
                valid = false;
            }

            if (valid) {
                // Save new user to localStorage
                localStorage.setItem(username, JSON.stringify({ username, email, password }));
                alert('Signed up successfully!');
                signUpForm.submit(); // Programmatically submit the form
            }
        });
    }

    // Handle sign-in form submission
    const signInForm = document.getElementById('sign_in_form');
    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            const user = JSON.parse(localStorage.getItem(username));

            if (user && user.password === password) {
                alert('Sign in successful!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});

// Function to go back to the previous page
function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    showItem(currentIndex);
    setInterval(nextItem, 3500); 
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.inputBox input[type="text"], .inputBox input[type="email"]').forEach(input => {
        let label = input.nextElementSibling;
        label.innerHTML = label.innerText.split('').map((letter, i) =>
            `<span style="transition-delay:${i * 50}ms">${letter}</span>`
        ).join('');
    });
});


$(document).ready(function() {
$('a').click(function(e) {
    e.preventDefault(); 

    var href = $(this).attr('href'); 

    $('body').fadeOut(300, function() {
        window.location.href = href;
    });
});
});
