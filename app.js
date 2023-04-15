let tg = window.Telegram.WebApp;

tg.expand()

let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", function(){
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("user_name").style.display = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
    });

order.addEventListener("click", function(){
    tg.close():
    });