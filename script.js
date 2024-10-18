const count=document.querySelector('.count')
const minusBtn = document.querySelector(".minus-btn");/*. class select k liye*/
const plusBtn = document.querySelector(".plus-btn");
const changeBy= document.querySelector(".selfchange");
const resetBtn= document.querySelector('.reset-btn')


plusBtn.addEventListener('click',()=>{
   const countValue=parseInt(count.innerText);
   const changeByValue=parseInt(changeBy.value)
   count.innerText=countValue+changeByValue;
})


minusBtn.addEventListener('click',()=>{
    const countValue=parseInt(count.innerText);
    const changeByValue=parseInt(changeBy.value)
    count.innerText=countValue-changeByValue;
})
resetBtn.addEventListener('click',()=>{
    count.innerText = 0
})

