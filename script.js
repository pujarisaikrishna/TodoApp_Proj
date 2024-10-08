const Ip = document.querySelector("#ip")
const addBtn = document.querySelector("#add-btn")
const taskList = document.querySelector("#task-list")

addBtn.addEventListener('click', ()=>{
    if(Ip.value !==" "){
        const taskText = Ip.value
        const listItem = document.createElement("li")
        listItem.innerHTML =
                            `${taskText}
                            <button class = "delete-btn">Delete</button>`
        taskList.appendChild(listItem)   
        Ip.value = ""                  
    }
})


taskList.addEventListener('click', (event) =>{
    if(event.target.classList.contains("delete-btn")){
        const listItem = event.target.parentElement
        taskList.removeChild(listItem)
    }
})



