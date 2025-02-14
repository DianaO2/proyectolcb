const menu = document.querySelector('.fa-bars');
const linkDiv = document.querySelector('.links-div');

menu.addEventListener('click',() =>{
    linkDiv.classList.toggle('active');

    if (linkDiv.classList.contains('active')){
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-times');
    }else{
        menu.classList.add('fa-bars');
        menu.classList.remove('fa-times');
    }
})