document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('stefanuttiramiro@gmail.com'); // Reemplaza 'YOUR_USER_ID' con tu userID de EmailJS
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const formData = new FormData(this);

    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        comments: formData.get('comments')
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            document.getElementById('responseMessage').innerText = 'Correo enviado exitosamente.';
        }, function(error) {
            document.getElementById('responseMessage').innerText = 'Error al enviar el correo.';
            console.error('Error:', error);
        });
});
