function validate() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    var button2 = document.getElementById("submit")

    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entry = {
        "name": username,
        "pass": password
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    button2.onclick = location.href = '/Login/login.html'
    alert("Kayıt Başarıyla Tamamlanmıştır...")
}
