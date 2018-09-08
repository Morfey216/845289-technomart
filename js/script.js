var write_btn = document.querySelector(".contacts-button");
var write_popap = document.querySelector(".modal-write");
var write_close = write_popap.querySelector(".modal-close");

var map_btn = document.querySelector(".small-map");
var map_popap = document.querySelector(".modal-map");
var map_close = map_popap.querySelector(".modal-close");

write_btn.addEventListener("click",function(evt){
  evt.preventDefault();
  write_popap.classList.add("modal-show");
});

write_close.addEventListener("click",function(evt){
  evt.preventDefault();
  write_popap.classList.remove("modal-show");
});

map_btn.addEventListener("click",function(evt){
  evt.preventDefault();
  map_popap.classList.add("modal-show");
});

map_close.addEventListener("click",function(evt){
  evt.preventDefault();
  map_popap.classList.remove("modal-show");
});

