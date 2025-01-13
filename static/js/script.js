document.addEventListener('DOMContentLoaded', () => {
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let selections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    selections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top <= offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
} else {
    console.log('menuIcon or navbar not found');
}


    emailjs.init("ia-5Y7wl1FRql9Ajc"); 

    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); 

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        const templateParams = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        };
        console.log(templateParams); 
        emailjs
            .send("service_9h6pr8m", "template_0cymia9", templateParams)
            .then(
                (response) => {
                    alert("Message sent successfully!");
                    console.log(templateParams);

                },
                (error) => {
                    alert("Failed to send message. Please try again. the issue is in your brower you need to allow or install certain extension");
                    console.error("EmailJS Error:", error);
                    console.log(templateParams);

                }
            );
    });
});
