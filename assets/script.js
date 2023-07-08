const btn = document.querySelector('button');
const list = document.getElementById('app');
const task = document.querySelector('input');
const tasks = [];

btn.addEventListener('click', function () {
    if (task.value != "") {
        addTask()
    } else {
        alert("Task can't be empty")
    }
});

function addTask() {
    tasks.push(task.value)
    task.value = "";
    list.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        list.innerHTML += `<li>${tasks[i]}</li>`;
    }
}



