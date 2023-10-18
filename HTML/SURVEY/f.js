const submitButton = document.querySelector("#submit");
const resetButton = document.querySelector("#reset");
const okButton = document.querySelector("#ok");
const display = document.querySelector(".final-display");

const userName = document.querySelector("#name");
const mail = document.querySelector("#mail");
const form = document.querySelector("#form");
const isFormValid = false;
const formValues = {};

submitButton.addEventListener('click', submitFunction);
resetButton.addEventListener('click',resetAll);
okButton.addEventListener('click',okFunction)

function okFunction() {
    display.classList.remove('show');
    resetAll();
    
}


function submitFunction(e) {
e.preventDefault()
const formData = new FormData(form)
    formValues.name = userName.value;
    formValues.mail = mail.value;
    formData.forEach((value, key) => {
    formValues[key] = value;
   });

   if(form.checkValidity()) {
    display.classList.add('show');
    showInfo();
   }    
  
}

function resetAll() {
    userName.value = "";
    mail.value = "";
    formValues.name = "";
    formValues.mail = "";
    document.querySelector("#suggestion").value = "";
    document.querySelector("#satisfied").checked = true;
    document.querySelector("#yes2").checked = true;
    document.querySelector("#yes1").checked = true;
    for (const key in formValues) {
        if (formValues.hasOwnProperty(key)) {
            formValues[key] = "";
        }
    }
}

function showInfo() {
    let nameOp = document.querySelector("#name-op");
    let mailOp= document.querySelector("#mail-op");
    let qn1 = document.querySelector("#qn1-op");
    let qn2 = document.querySelector("#qn2-op");
    let satisfaction = document.querySelector("#qn3-op");
    let suggestion = document.querySelector("#suggest-op");

    nameOp.textContent = `Name : ${formValues.name}`
    mailOp.textContent = `Email : ${formValues.mail}`
    qn1.textContent = `First time? : ${formValues.question1}`
    qn2.textContent = `Suggest to friends? : ${formValues.question2}`
    satisfaction.textContent = `Satisfaction : ${formValues.satisfaction}`
    suggestion.textContent = `Suggestions : ${formValues.suggestion}`
}
