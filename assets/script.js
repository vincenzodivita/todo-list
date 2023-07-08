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
    list.innerHTML += `<li>${task.value}</li>`;
    tasks.push(task.value)
    task.value = "";
    console.log(tasks)
}


