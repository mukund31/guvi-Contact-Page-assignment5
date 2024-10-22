const form = document.getElementById('contactFormContainer') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const contactNumberInput = document.getElementById('contactNumber') as HTMLInputElement;
const subjectInput = document.getElementById('subject') as HTMLInputElement;
const messageInput = document.getElementById('message') as HTMLInputElement;
const submitBtn = document.getElementById('submitBtn') as HTMLButtonElement;

const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

const validateName = (name: string) => {
    const re = /^[A-Za-z\s]+$/;
    return re.test(name);
};

const validateContactNumber = (contactNumber: string) => {
    const re = /^\d{10}$/;
    return re.test(contactNumber);
};

form.addEventListener('submit', (event: Event) => {
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

    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        contactNumber: contactNumberInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
    };

    fetch('https://6717ef54b910c6a6e02a9fea.mockapi.io/mukundkeshan/contactFormData', { // Replace with actual MockAPI URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Failed to send the message");
        }
    })
    .catch(error => {
        console.error("Error submitting the form: ", error);
        alert("Error submitting the form");
    });
});
