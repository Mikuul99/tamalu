const slider = document.querySelector('.products__slider');

let index = 0;

const sliderButton = document.querySelectorAll('.products__btn').forEach(item => {

    item.addEventListener('click', () => {
        
        if(item.classList.contains('products__btn-left') && index > 0) {
            index--;
            console.log(index);
            slider.style.transform += "translate(20.5rem)"
        }

        if(item.classList.contains('products__btn-right') && index < slider.children.length - 3) {
            index++;
            console.log(index);
            slider.style.transform += "translate(-20.5rem)"
        }

    });
});