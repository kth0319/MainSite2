function dosubmit(e){
    const id = document.querySelector('#id').value
    const pwd = document.querySelector('#pwd').value
    localStorage.setItem(id, pwd)
    e.preventDefault()
    window.location.href = 'login.html'
}

document.addEventListener('submit', dosubmit) // form submit 후 login page로 이동
