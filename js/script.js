var write_btn = document.querySelector(".contacts-button");
var write_popap = document.querySelector(".modal-write");
var write_close = write_popap.querySelector(".modal-close");

write_btn.addEventListener("click",function(evt){
  evt.preventDefault();
  write_popap.classList.add("modal-show");
});

write_close.addEventListener("click",function(evt){
  evt.preventDefault();
  write_popap.classList.remove("modal-show");
});
