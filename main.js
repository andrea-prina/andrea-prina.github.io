const box = document.querySelector('.box-body')
const code = document.getElementById('code')

box.addEventListener('click', function(){
    box.classList.add('active')
    code.classList.remove('d-none')
})