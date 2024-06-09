document.getElementById('phone').addEventListener('input', function(event) {
    let phoneInput = event.target;
    let phoneValue = phoneInput.value;

    // Limit the input to 10 digits
    if (phoneValue.length > 10) {
        phoneInput.value = phoneValue.slice(0, 10);
    }

    // Validate the phone number
    if (!/^\d{10}$/.test(phoneInput.value)) {
        phoneInput.setCustomValidity('Please enter a valid 10-digit mobile number.');
    } else {
        phoneInput.setCustomValidity('');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let submitButton = event.target.querySelector('button[type="submit"]');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    let form = event.target;
    let formData = new FormData(form);
    let responseMessage = document.getElementById('formMessage');

    fetch('https://formsubmit.co/ajax/rgconsultancy042023@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            responseMessage.innerHTML = '<p class="response-msg-paragraph">We\'ve got your message! Our team will reach out to you shortly.</p>';
            responseMessage.style.color = 'green';
            form.reset();
        } else {
            responseMessage.innerHTML = `<p>There was an error: ${result.message || 'Unknown error occurred.'}</p>`;
            responseMessage.style.color = 'red';
        }

        console.log('Success:', result);
        submitButton.textContent = 'Send';
        submitButton.disabled = false;
    })
    .catch(error => {
        responseMessage.innerHTML = `<p>There was an error sending your message. Please try again. Error: ${error.message}</p>`;
        responseMessage.style.color = 'red';
        console.error('Error:', error);
        submitButton.textContent = 'Send';
        submitButton.disabled = false;
    });
});
