let tg = window.Telegram.WebApp;

let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", function(){
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
});

order.addEventListener("click", function(){
    tg.close();
});
