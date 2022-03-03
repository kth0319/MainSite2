const signUpButton = document.querySelector('#signup')
const hidden = document.querySelector('.hidden')

function goToSignUp(){
    window.location.href = 'signup.html'
}

function removeHidden(e){
    hidden.classList.remove('hidden')
    e.preventDefault() // set: no refresh
}

document.addEventListener('submit', removeHidden) // form submit 되면 signup link 나타남
signUpButton.addEventListener('click', goToSignUp) // signup 버튼 누르면 signup page로 이동