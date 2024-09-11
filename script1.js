// script.js

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide, index) => {
    slide.style.opacity = '0'; // Hide all slides
    slide.classList.remove('active');
  });

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} // Loop back to the first slide
  slides[slideIndex-1].style.opacity = '1'; // Show the current slide
  slides[slideIndex-1].classList.add('active');
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides(); // Start the slideshow
});


// script.js






























// script.js

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.service-section');

  sections.forEach(section => {
    const starCount = 50; // Adjust the number of stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      // Randomize position and size
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      section.appendChild(star);
    }
  });
});









































const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Route to handle form submission
app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Set up nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'vishwasmadane55@gmail.com', // Replace with your email
            pass: 'Komal@1234'   // Replace with your email password or app-specific password
        }
    });

    // Email options
    let mailOptions = {
        from: email,
        to: 'recipient-email@gmail.com', // Replace with recipient email
        subject: `Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error occurred: ' + error.message);
        }
        res.status(200).send('Message sent successfully!');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




































document.getElementById('custom-contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Get the hidden iframe
  const iframe = document.getElementById('ms-form');
  
  // Create a form in the iframe document
  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(`
      <form action="https://forms.office.com/r/your-form-id" method="POST">
          <input type="hidden" name="name" value="${name}">
          <input type="hidden" name="email" value="${email}">
          <input type="hidden" name="message" value="${message}">
      </form>
  `);
  iframe.contentWindow.document.close();

  // Submit the form inside the iframe
  iframe.contentWindow.document.forms[0].submit();

  // Display a success message
  document.getElementById('form-status').innerText = "Thank you for contacting us! Your message has been sent.";
  
  // Clear the form
  document.getElementById('custom-contact-form').reset();
});



document.getElementById('custom-contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Create a form element to submit to Microsoft Forms
  const form = document.createElement('form');
  form.setAttribute('method', 'POST');
  form.setAttribute('action', 'https://forms.office.com/r/your-form-id');
  form.setAttribute('target', 'form-iframe');

  // Create input fields with the form data
  const nameField = document.createElement('input');
  nameField.setAttribute('type', 'hidden');
  nameField.setAttribute('name', 'entry.your-name-field-id');
  nameField.setAttribute('value', document.getElementById('name').value);

  const emailField = document.createElement('input');
  emailField.setAttribute('type', 'hidden');
  emailField.setAttribute('name', 'entry.your-email-field-id');
  emailField.setAttribute('value', document.getElementById('email').value);

  const messageField = document.createElement('input');
  messageField.setAttribute('type', 'hidden');
  messageField.setAttribute('name', 'entry.your-message-field-id');
  messageField.setAttribute('value', document.getElementById('message').value);

  // Append fields to the form
  form.appendChild(nameField);
  form.appendChild(emailField);
  form.appendChild(messageField);

  // Append the form to the body and submit it
  document.body.appendChild(form);
  form.submit();

  // Remove the form after submission
  document.body.removeChild(form);

  // Show a success message and reset the form
  document.getElementById('form-status').innerText = "Thank you for contacting us! Your message has been sent.";
  document.getElementById('custom-contact-form').reset();
});













window.onload = function() {
  const carouselWrappers = document.querySelectorAll('.carousel-wrapper');

  carouselWrappers.forEach(wrapper => {
    const totalItems = wrapper.querySelectorAll('.carousel-item').length;
    const animationDuration = totalItems * 3; // Adjust based on the number of items

    wrapper.style.animationDuration = `${animationDuration}s`;
  });
};



































// vedio 
