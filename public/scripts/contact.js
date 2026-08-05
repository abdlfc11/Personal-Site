const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    formStatus.textContent = 'Sending…';
    formStatus.className = 'form-status';

    try {
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: { Accept: 'application/json' },
        });

        if (response.ok) {
            formStatus.textContent = "Thanks — your message is on its way. I'll get back to you soon.";
            formStatus.classList.add('success');
            contactForm.reset();
        } else {
            formStatus.textContent = 'Something went wrong. Please try again or email me directly.';
            formStatus.classList.add('error');
        }
    } catch (err) {
        formStatus.textContent = 'Something went wrong. Please check your connection and try again.';
        formStatus.classList.add('error');
    } finally {
        submitButton.disabled = false;
    }
});