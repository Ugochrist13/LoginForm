
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const showPassword = document.querySelector("#showpassword")
const savePassword = document.querySelector("#savePassword")
const login = document.querySelector("#login")


if(localStorage.getItem("loginDetails") == null){
    const data = JSON.stringify({
        username: "",
        password: ""
    })
    localStorage.setItem("loginDetails", data)
}else{
    let data = JSON.parse(localStorage.getItem("loginDetails"))
    username.value = data.username;
    password.value = data.password;

    if(data.username != "" || data.password !=""){
        savePassword.setAttribute("checked", true)
    }
}

showPassword.addEventListener("click",function(e){
    e.preventDefault()
    if(password.type == "password"){
        password.setAttribute("type", "text")
    }
    else{
        password.setAttribute("type", "password")
    }
})

savePassword.addEventListener("change",function(e){
    if((e.target.checked) == true){
        const data = JSON.stringify({
            username: username.value,
            password: password.value
        })
        localStorage.setItem("loginDetails", data)
    }else{
        const data = JSON.stringify({
            username: "",
            password: ""
        })
        localStorage.setItem("loginDetails", data)
    }
})