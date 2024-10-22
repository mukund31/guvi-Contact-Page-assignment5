var form = document.getElementById('contactFormContainer');
var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var contactNumberInput = document.getElementById('contactNumber');
var subjectInput = document.getElementById('subject');
var messageInput = document.getElementById('message');
var submitBtn = document.getElementById('submitBtn');
var validateEmail = function (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
};
var validateName = function (name) {
    var re = /^[A-Za-z\s]+$/;
    return re.test(name);
};
var validateContactNumber = function (contactNumber) {
    var re = /^\d{10}$/;
    return re.test(contactNumber);
};
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (nameInput.value === "" || emailInput.value === "" || contactNumberInput.value === "" || subjectInput.value === "" || messageInput.value === "") {
        alert("Please fill in all the required fields.");
        return;
    }
    if (!validateName(nameInput.value)) {
        alert("Enter a valid Name");
        return;
    }
    if (!validateEmail(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!validateContactNumber(contactNumberInput.value)) {
        alert("Enter a valid Contact Number");
        return;
    }
    var formData = {
        name: nameInput.value,
        email: emailInput.value,
        contactNumber: contactNumberInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };
    fetch('https://6717ef54b910c6a6e02a9fea.mockapi.io/mukundkeshan/contactFormData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(function (response) {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        }
        else {
            alert("Failed to send the message");
        }
    })
        .catch(function (error) {
        console.error("Error submitting the form: ", error);
        alert("Error submitting the form");
    });
});
