const resetBtn = document.querySelector('.reset')
const input = document.querySelectorAll('input')

for(let i=0 ; i<input.length ; i++){
    resetBtn.addEventListener('click', ()=>{
    input[i].value = ''
})
}