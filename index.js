const form = document.getElementById("myform")

form.onsubmit = (event) => {
    event.preventDefault();
    console.log("testing the contact us form");
}