function log() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var button = document.getElementById("submit")
    
    let user = (JSON.parse(localStorage.getItem("allEntries")));
    console.log(user[3].name);
    console.log(username);

    let i = 0
    while (i<user.length) {
        if(username === user[i].name && password === user[i].pass){
            alert("Giriş Başarılı Sayfaya Yönlendiriliyorsunuz")
            button.onclick = location.href = '/ExchangeRate/index.html'
            break
        }else{
            if(i === user.length -1){
                alert("Kullanıcı Adı veya şifre hatalı")
            }
        }
        i++
    }

    
}

