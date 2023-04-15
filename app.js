let tg = window.Telegram.WebApp;

tg.expand();

let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", function(){
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
});

order.addEventListener("click", function(){
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let phone = document.getElementById("user_phone").value;

    let data = {
        name: name,
        email: email,
        phone: phone
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
});
