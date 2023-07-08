document.querySelector('button').addEventListener('click', function () {
    document.getElementById('app').innerHTML += "<li>" + document.querySelector('input').value + "</li>"
});


