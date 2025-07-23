const userInput = document.querySelector('.todolist_container .user_input input')
const userBtn = document.querySelector('.todolist_container .user_input button')
const userList = document.querySelector('.todolist_container .list')

console.log(userList)
userBtn.addEventListener('click',()=>{
    if(!userInput.value ==''){
        const newItem = document.createElement('li');
        newItem.innerHTML = `<label><input type="checkbox"><span>${userInput.value}</span></label>`;
        userList.appendChild(newItem)
        userInput.value = ''
        const userCheck = newItem.querySelector('input')
        userCheck.addEventListener('click',()=>{
            newItem.style.display = 'none'
        })
    }else{
        window.alert('할 일을 입력하세요')
        console.log(0)
    }
})
