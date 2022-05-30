document.getElementById("change").addEventListener("click",change)


function change(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET","https://v6.exchangerate-api.com/v6/54b8b5782b8896c680bd8aa8/latest/USD");


    xhr.onload = function () {
        if(this.status){
            const response = JSON.parse(this.responseText)
            const rate = response.conversion_rates.TRY
            const amount = Number(document.getElementById("amount").value)

            document.getElementById("tl").value = amount * rate
        }
    }
    xhr.send()
}