// Код только для главной страницы

if (document.body.className === "main-page") {

  var write_btn = document.querySelector(".contacts-button");
  var write_popap = document.querySelector(".modal-write");
  var write_close = write_popap.querySelector(".modal-close");

  var map_btn = document.querySelector(".small-map");
  var map_popap = document.querySelector(".modal-map");
  var map_close = map_popap.querySelector(".modal-close");

  // Окно обратной связи

  write_btn.addEventListener("click",function(evt){
    evt.preventDefault();
    write_popap.classList.add("modal-show");
  });

  write_close.addEventListener("click",function(evt){
    evt.preventDefault();
    write_popap.classList.remove("modal-show");
  });

  // Окно интерактивной карты

  map_btn.addEventListener("click",function(evt){
    evt.preventDefault();
    map_popap.classList.add("modal-show");
  });

  map_close.addEventListener("click",function(evt){
    evt.preventDefault();
    map_popap.classList.remove("modal-show");
  });

}

// Общий код

var add_btn = document.querySelectorAll(".buy");
var add_popap = document.querySelector(".add-to-basket");
var add_close = add_popap.querySelector(".modal-close");
var continues = add_popap.querySelector(".continue-shopping");

// Окно добавления товара в корзину

for (var i = 0; i < add_btn.length; i++) {
  add_btn[i].addEventListener("click",function(evt){
  evt.preventDefault();
  add_popap.classList.add("modal-show");
  });
};

add_close.addEventListener("click",function(evt){
  evt.preventDefault();
  add_popap.classList.remove("modal-show");
});

continues.addEventListener("click",function(evt){
  evt.preventDefault();
  add_popap.classList.remove("modal-show");
});

