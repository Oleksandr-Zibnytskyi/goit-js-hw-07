const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const elements = event.currentTarget.elements;
    console.log(elements);

    const info = {
        email: elements.email.value,
        password: elements.password.value,
    };

    if (info.email.trim() === "" || info.password.trim() === "") {
        alert("All form fields must be filled in")
    } else {
        console.log(info);
    }
        event.currentTarget.reset() 
}



const logButton = document.querySelector('.login-form button');

logButton.classList.add('button-style');
