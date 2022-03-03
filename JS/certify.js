function Certify(){
    const inputid = document.querySelector('#id').value // user가 입력한 id
    const inputpwd = document.querySelector('#pwd').value // user가 입력한 pwd
    const pwd = localStorage.getItem(inputid) // localstorage에서 키: id 로 저장된 pwd 불러옴
    if (inputpwd == pwd){
        window.location.href = 'main.html' // pwd가 일치하면 main page로 이동
    }
    else if (pwd === null) // inputid에 해당하는 값이 없으면
        alert("존재하지 않는 ID입니다.")
        window.location.href = 'signup.html' // signup page로 이동
}

document.addEventListener('submit', Certify)