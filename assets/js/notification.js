        let issetName;
        let issetPhone;
        let issetEmail;
        let issetAddress;
        let issetSize;
        let name= document.querySelector("input[name=fullname]");
        let phone= document.querySelector("input[name=phone_number]");
        let email= document.querySelector("input[name=email]");
        let address= document.querySelector("input[name=address]");
        let size= document.querySelector("select");

        name.onchange= function(event){
           issetName =event.target.value;
        }
        phone.onchange= function(event){
           issetPhone =event.target.value;
        }
        email.onchange= function(event){
           issetEmail =event.target.value;
        }
        address.onchange= function(event){
           issetAddress =event.target.value;
        }
        size.onchange= function(event){
           issetSize =event.target.value;
        }
   
        function notification() {
            if(issetName && issetPhone && issetEmail && issetAddress && issetSize) {
                alert("❤Cảm ơn bạn đã luôn đồng hành cùng DONA shop❤!\nBên mình sẽ sớm liên lạc với bạn💌");   
            }
            else{
                alert("Vui lòng điền đầy đủ thông tin😥😥");
            }
        }