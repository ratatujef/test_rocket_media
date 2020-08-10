window.addEventListener("DOMContentLoaded", function () {

    let modal = document.querySelector('.modal'),
        btn = document.querySelector('.btn_promo');

        btn.addEventListener('click', ()=>{
            modal.classList.add ('modal_active');
        });
        modal.addEventListener('click', (e)=>{
            let target = e.target;
            if(target==modal){
                modal.classList.remove('modal_active');
            }
        });

});