document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!name || !phone || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    let form = event.target;
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://formsubmit.co/kmanjula5697@gmail.com,support@trade-rg-consultancy.com,rahulniraimathi@gmail.com,rgconsultancy042023@gmail.com');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let responseMessage = document.getElementById('formMessage');
            if (xhr.status === 200) {
                responseMessage.innerHTML = '<p>Thank you! Your message has been sent.</p>';
                responseMessage.style.color = 'green';
                form.reset();
            } else {
                responseMessage.innerHTML = '<p>There was an error sending your message. Please try again.</p>';
                responseMessage.style.color = 'red';
            }
        }
    };
    xhr.send(formData);
});
