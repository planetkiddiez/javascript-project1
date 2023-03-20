// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const modalBnt = document.querySelector(".modal-btn");
const modalOverlayBnt = document.querySelector(".modal-overlay");
const closeBnt = document.querySelector(".close-btn");

modalBnt.addEventListener('click', function(){
    console.log(modalBnt.classList);
    //modalOverlayBnt.classList.add("open-modal");
    if(modalBnt.classList.contains("open-modal")){
        modalOverlayBnt.classList.remove("open-modal");
       }else{
        modalOverlayBnt.classList.add("open-modal");
       }
});

closeBnt.addEventListener('click', function(){
    console.log(modalBnt.classList);
    modalOverlayBnt.classList.remove("open-modal");
    
});