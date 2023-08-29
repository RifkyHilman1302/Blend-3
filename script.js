const taskInput = document.getElementById("taskInput")
const addTaskBtn= document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

StaticRange.add

//function addTask(){
    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.ariaValueMax.trim()

        if (taskText != ""){
            //createElement => membuat elemen baru, contoh tag <li>
            const li = document.createElement("li");
            li.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <div class="btn-container">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            taskList.appendChild(li)
            taskInput.value = "";

            const end = taskInput.value.lenght;
            taskInput.setSelectionRange(end, end);
            taskInput.focus();

        }
    });

    taskList.addEventListener("click", (event) => {
        const target = event.target;

        if (target.className === "delete-btn") {
            target.parentElement.parentElement.remove();
        } else if (target.className === "edit-btn") {
            const taskText = target.parentElement.previousElementString.remove();
            const newText = prompt("Edit : ", taskText);
            if(newText !== null || newText !== "") {
                target.parentElement.previousElemenSibling.text
            }
        }
    });
//}