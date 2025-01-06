window.addEventListener("scroll",function() {
var header=document.querySelector("header");
header.classList.toggle("sticky",window.scrollY > 0);

});
function toggleMenu(){
    var menuToggle= document.querySelector(".toggle");
    var menu= document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}

function sendEmail(event) {
    event.preventDefault(); 

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

   
    const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
    };

 
    emailjs.send("service_dks8k0w", "template_ockqhyl", templateParams)
        .then((response) => {
            alert("Message sent successfully!"); // Notify user of success
            console.log("Email sent:", response);
        })
        .catch((error) => {
            alert("Failed to send message. Please try again later."); // Notify user of failure
            console.error("EmailJS Error:", error);
        });
}
