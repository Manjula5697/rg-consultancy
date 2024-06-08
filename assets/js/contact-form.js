document.getElementById('contactForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !phone || !email || !message) {
        event.preventDefault();
        alert('Please fill in all fields.');
    }
});
