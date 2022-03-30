let btnFeeback = document.querySelector('.btn');
let formFeedback = document.querySelector('.form-Feedback');
let inputName= document.querySelector('input[name="name"]');
let inputEmail= document.querySelector('input[name="email"]');
let textArea= document.querySelector('textarea');
let btnSend= document.querySelector('.btn-Send');
btnFeeback.onclick = function(){
    formFeedback.classList.toggle('open');
}

btnSend.onclick = function(event){
    // event.preventDefault();
    // inputName.value='';
    // inputEmail.value='';
    // textArea.value='';
    // location.href = ("wb_php/detail.php");
    
}