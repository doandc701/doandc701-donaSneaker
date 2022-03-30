// const N1 = document.querySelector.bind(document);
        // const N2 = document.querySelectorAll.bind(document);

        let tabIndex= document.querySelectorAll('.list-item');
        let contentIndex= document.querySelectorAll('.tab-pand');
       
        const tabActive = document.querySelector(".list-item.active");
        const line = document.querySelector(".tabs .line");

        line.style.left = tabActive.offsetLeft + "px";
        line.style.width = tabActive.offsetWidth + "px";

        tabIndex.forEach((tab,index) =>{
            const pand= contentIndex[index];

            tab.onclick = function(){
                document.querySelector('.list-item.active').classList.remove('active');
                document.querySelector('.tab-pand.active').classList.remove('active');

                line.style.left = this.offsetLeft + "px";
                line.style.width = this.offsetWidth + "px";
                this.classList.add('active');
                pand.classList.add('active');
            }

        }) 