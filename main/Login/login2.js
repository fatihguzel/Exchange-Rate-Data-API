function validate() {
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    if(username == "admin" || password == "user"){
        alert("login succesfully")
        return false
    }
    else{
        alert("login failed")
    }
}
