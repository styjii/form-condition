const form = document.querySelector("form")
const button = document.getElementById("btn")


button.onclick = (e) => {
    let err = ""
    e.preventDefault()
    // when its condition does not correct assigned to the err the incorrect field with the contition
    if (form.username.value === "") {
        err = "the username value is empty"
    } else if (form.tel.value === "") {
        err = "the tel value is empty"
    } else if (form.tel.value.length < 10) {
        err = "tel is necessary of length greater than 10 or equal to 10"
    } else if (form.password.value === "") {
        err = "the password value is empty"
    } else if (form.password.value.length < 8) {
        err = "the length of the password is less than 8"
    } else {
        err = "correct"
    }

    // Create a message
    const message = `Hello, ${form.username.value}. Your number is ${form.tel.value}, and your password is ${form.password.value}`

    
    const p = document.createElement("p")
    p.style.color = "#fff"
    p.style.textAlign = "center"
    
    // Put the message in this paragraph created above
    const text = document.createTextNode(message)
    p.appendChild(text)

    // Create a second button
    const buttonR = document.createElement('input')
    buttonR.setAttribute("type", "submit")
    buttonR.setAttribute("value", "Back")

    // When all the conditions are correct, imported all the values into a new paragraph that overrides the contents in the form
    if (err === "correct") {
        document.querySelector('.form-controls').replaceChild(p, form)
        document.querySelector('.form-controls').appendChild(buttonR)
        document.querySelector('.form-controls').style.maxWidth = "450px"
        document.querySelector('.form-controls').style.margin = "0 auto"
    } else {
        // else displays the incorrect condition in the alert box
        alert(err)
    }
    // When we click on the button that we create button back to the back
    buttonR.addEventListener("click", () => {
        document.querySelector('.form-controls').replaceChild(form, p)
        buttonR.style.display = "none"
        document.querySelector('.form-controls').style.maxWidth = "none"
        document.querySelector('.form-controls').style.margin = "0"
    })
}