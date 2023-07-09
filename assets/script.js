const addBtn = document.getElementById('add-btn');
const list = document.getElementById('app');
const task = document.querySelector('input');
const tasks = [];

addBtn.addEventListener('click', function () {
    if (task.value != "") {
        addTask()
    } else {
        alert("Task can't be empty")
    }
});

function addTask() {
    tasks.unshift(task.value)
    console.log(tasks)
    task.value = "";
    list.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `<li>${tasks[i]}</li>`;
    }
}



