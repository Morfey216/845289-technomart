// Общий код

var add_btn = document.querySelectorAll(".buy");
var add_popap = document.querySelector(".add-to-basket");
var add_close = add_popap.querySelector(".modal-close");
var continues = add_popap.querySelector(".continue-shopping");

var escKeyCode = 27;

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

// Закрытие по нажатию Esc модального окна добавления товара

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === escKeyCode) {
      evt.preventDefault();
      if (add_popap.classList.contains("modal-show")) {
        add_popap.classList.remove("modal-show");
      }
    }
  });

// Код только для главной страницы

if (document.body.className === "main-page") {

  var write_btn = document.querySelector(".contacts-button");
  var write_popap = document.querySelector(".modal-write");
  var write_close = write_popap.querySelector(".modal-close");
  var form = write_popap.querySelector("form");
  var user_name = form.querySelector("input[type=text]");
  var user_mail = form.querySelector("input[type=email]");
  
  var isStorageSupport = true;
  var storage = "";

  var map_btn = document.querySelector(".small-map");
  var map_popap = document.querySelector(".modal-map");
  var map_close = map_popap.querySelector(".modal-close");
  
  var service_btns = document.querySelectorAll(".service-control-button");
  var service_btn1 = service_btns.item(0);
  var service_btn2 = service_btns.item(1);
  var service_btn3 = service_btns.item(2);
  var service_sliders = document.querySelector(".services-slider-list");
  var s_slide1 = service_sliders.querySelector(".slide-1");
  var s_slide2 = service_sliders.querySelector(".slide-2");
  var s_slide3 = service_sliders.querySelector(".slide-3");
  
  var promo_sliders = document.querySelectorAll(".promo-slider-item");
  var currentSlide = 0;
  var previous = document.querySelector(".slider-button-back");
  var next = document.querySelector(".slider-button-next");
  var indicators = document.querySelectorAll(".slider-indicator-item");
  
  // Окно обратной связи

  try {
    storage = localStorage.getItem("user_name");
  } catch (err) {
    isStorageSupport = false;
  }
  
  write_btn.addEventListener("click",function(evt){
    evt.preventDefault();
    write_popap.classList.add("modal-show");
    if (storage) {
      user_name.value = storage;
      user_mail.focus();
    } else {
      user_name.focus();
    }
  });
  
  form.addEventListener("submit",function(evt){
    if (!user_name.value || !user_mail.value) {
      evt.preventDefault();
      write_popap.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("user_name", user_name.value);
      }
    }
  });

  write_close.addEventListener("click",function(evt){
    evt.preventDefault();
    write_popap.classList.remove("modal-show");
    write_popap.classList.remove("modal-error");
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

  // Закрытие по нажатию Esc модального окна обратной связи или карты
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === escKeyCode) {
      evt.preventDefault();
      if (write_popap.classList.contains("modal-show")) {
        write_popap.classList.remove("modal-show");
        write_popap.classList.remove("modal-error");
      }
      if (map_popap.classList.contains("modal-show")) {
        map_popap.classList.remove("modal-show");
      }
    }
  });
  
  // Переключение слайдов промо-блока
  
  previous.addEventListener("click",function(evt){
    evt.preventDefault();
    promo_sliders[currentSlide].classList.remove("promo-slider-checked");
    currentSlide = currentSlide-1; 
    if (currentSlide < 0) { 
      currentSlide = promo_sliders.length-1; 
    }
    promo_sliders[currentSlide].classList.add("promo-slider-checked");
    indicators[currentSlide].checked = true;
  });
  
  next.addEventListener("click",function(evt){
    evt.preventDefault();
    promo_sliders[currentSlide].classList.remove("promo-slider-checked");
    currentSlide++; 
    if (currentSlide >= promo_sliders.length) { 
      currentSlide = 0; 
    }
    promo_sliders[currentSlide].classList.add("promo-slider-checked");
    indicators[currentSlide].checked = true;
  });
  
  // Переключение слайдов блока Сервисы
  
  service_btn1.addEventListener("click",function(evt){
    evt.preventDefault();
    service_btn2.classList.remove("sbtn-checked");
    service_btn3.classList.remove("sbtn-checked");
    s_slide2.classList.remove("service-slide-checked");
    s_slide3.classList.remove("service-slide-checked");
    s_slide1.classList.add("service-slide-checked");
    service_btn1.classList.add("sbtn-checked");
  });
  
  service_btn2.addEventListener("click",function(evt){
    evt.preventDefault();
    service_btn1.classList.remove("sbtn-checked");
    service_btn3.classList.remove("sbtn-checked");
    s_slide1.classList.remove("service-slide-checked");
    s_slide3.classList.remove("service-slide-checked");
    s_slide2.classList.add("service-slide-checked");
    service_btn2.classList.add("sbtn-checked");
  });
  
  service_btn3.addEventListener("click",function(evt){
    evt.preventDefault();
    service_btn1.classList.remove("sbtn-checked");
    service_btn2.classList.remove("sbtn-checked");
    s_slide1.classList.remove("service-slide-checked");
    s_slide2.classList.remove("service-slide-checked");
    s_slide3.classList.add("service-slide-checked");
    service_btn3.classList.add("sbtn-checked");
  });
  
}

