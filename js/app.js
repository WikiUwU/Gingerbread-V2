const main_nav = document.querySelector(".main-nav");
const open_menu = document.querySelector(".open-menu");
const close_menu = document.querySelector(".close-menu");

open_menu.addEventListener("click", show);
close_menu.addEventListener("click", close);

function show() {
    main_nav.style.top = '0';
}

function close() {
    main_nav.style.top = '-100%';
}



// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    
    //Get input values
    let name = document.getElementById("name").value; 
    let email = document.getElementById("email").value; 
    let subject = document.getElementById("subject").value; 
    let message = document.getElementById("message").value; 

    // saveContactInfo(name, email, message);

    document.querySelector(".contact-form").reset();

    sendEmail(name, email, subject, message);
}

//Send Email Info
function sendEmail(name, email, subject, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "email/username",
        Password: "password",
        To: "wiktor.jaworowski25@gmail.com",
        From: "wiktor.jaworowski25@gmail.com",
        Subject: `${subject}`,
        Body: `
        Name: ${name} <br>
        Email-Adresse: ${email} <br>
        Anliegen: ${subject} <br>
        Nachricht: ${message}
        `,
    }).then((message) => alert("Nachricht erfolgreich gesendet"))
}
