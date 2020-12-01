const form = document.getElementById('form')
const username = document.querySelector('#username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(field, message){
    const formControl = field.parentElement
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(field){
    const formControl = field.parentElement
    formControl.className = 'form-control success'
    //
}

function checkEmail(field){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(field.value.trim())){
        showSuccess(field)
    }else{
        showError(field, 'Email is not valid')
    }
}

const getFieldName = (field) => {
    return field.id.charAt(0).toUpperCase() + field.id.slice(1)
}

const checkPasswordsMatch = (field1, field2) => {
    if(field1.value !== field2.value){
        showError(field2, `Passwords do not match`)
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(element){
        if(element.value.trim() == ''){
            showError(element, `${getFieldName(element)} is required`)
        }else{
            showSuccess(element)
        }
    })
}

function checkLength(field, min, max){
    if(field.value.length < min){
        showError(field, `${getFieldName(field)} must be at least ${min} characters`)
    }else if(field.value.length > max){
        showError(field, `${getFieldName(field)} must be less than ${max} characters`)
    }else{
        showSuccess(field)
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 15)
    checkLength(password, 6, 25)
    checkEmail(email)
    checkPasswordsMatch(password, password2)
    // if(username.value == ''){
    //     showError(username, 'Username is required')
    // }else{
    //     showSuccess(username)
    // }

    // if(email.value == ''){
    //     showError(email, 'Email is required')
    // }else if(!checkEmail(email.value)){
    //     showError(email, 'Email is not valid')
    // }else{
    //     showSuccess(email)
    // }

    // if(password.value == ''){
    //     showError(password, 'Password is required')
    // }else{
    //     showSuccess(password)
    // }

    // if(password2.value == ''){
    //     showError(password2, 'Password confirmation is required')
    // }else{
    //     showSuccess(password2)
    // }
})