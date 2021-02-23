const box = document.querySelectorAll('.bax');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    const triggerBottom = (window.innerHeight / 5 * 4);
    box.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });
}