const btn = document.querySelector('button');
const list = document.getElementById('app');
const task = document.querySelector('input');

btn.addEventListener('click', function () {
    if (task.value != "") {
        list.innerHTML += "<li>" + task.value + "</li>";
        task.value = "";
    } else {
        alert("Task can't be empty")
    }
});


