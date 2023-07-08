const btn = document.querySelector('button');
const list = document.getElementById('app');
const task = document.querySelector('input');

btn.addEventListener('click', function () {
    list.innerHTML += "<li>" + task.value + "</li>";
});


