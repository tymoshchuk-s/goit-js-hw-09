const formData = { email: "", message: "" };

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('.feedback-input');
const messageEl = document.querySelector('.feedback-textarea')

form.addEventListener('input', onFormInput)
form.addEventListener('submit', enterSubmit) 

populateForm();

function onFormInput(event) {
    const target = event.target;

    if (target.name === 'email') {
        formData.email = target.value
    }
    if (target.name === 'message') {
        formData.message = target.value
    }
    localStorage.setItem('feedback', JSON.stringify(formData))
}



function populateForm() {
    const savedFormData = JSON.parse(localStorage.getItem('feedback'));
    if (!savedFormData)
        return;

    emailEl.value = savedFormData.email;
    messageEl.value = savedFormData.message;
    
    formData.email = savedFormData.email;
    formData.message = savedFormData.message;

}

function enterSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('all fields must be filled in');
        return;
    }
   
    event.target.reset();
    localStorage.removeItem('feedback');
    formData.email = '';
    formData.message = '';
}