const userInput = document.querySelector('.todolist_container .user_input input')
const userBtn = document.querySelector('.todolist_container .user_input button')
const userList = document.querySelector('.todolist_container .list')

console.log(userList)
    //하나의 li를 복사해두고 버튼 누를때마다 span에 붙여넣고 마지막 자식에 붙여넣기 형식으로 나열하기
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
