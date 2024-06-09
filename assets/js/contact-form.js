document.getElementById('phone').addEventListener('input', function(event) {
    let phoneInput = event.target;
    let phoneValue = phoneInput.value;

    if (!/^\d+$/.test(phoneValue) || phoneValue.length !== 10) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit mobile number.');
    } else {
        phoneInput.setCustomValidity('');
    }
});

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

    if (!/^\d+$/.test(phone)) {
        alert('Please enter a valid mobile number.');
        return;
    }

    let form = event.target;
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://formsubmit.co/kmanjula5697@gmail.com,rahulniraimathi@gmail.com,rgconsultancy042023@gmail.com');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            let responseMessage = document.getElementById('formMessage');
            if (xhr.status === 200) {
                responseMessage.innerHTML = '<p class="response-msg-paragraph">We\'ve got your message! Our team will reach out to you shortly.</p>';
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
