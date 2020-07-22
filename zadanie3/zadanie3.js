const sendBtn = document.querySelector('.send_button');
const messageList = document.getElementById('messages');
const socketStatus = document.getElementById('status');

const socket = new WebSocket('wss://echo.websocket.org/');
socket.onerror = function(error) {
    socketStatus.innerHTML = 'Error: ' + error
}

socket.onopen = function () {
    socketStatus.innerHTML = 'Connected'
}

socket.onclose = function() {
    socketStatus.innerHTML = 'Disconnected'
}

sendBtn.addEventListener('click', () => {
        socket.onmessage = function(event) {
            let msg = event.data;
            messageList.innerHTML += '<li class="recieved">' + msg + '</li>'
        }

        const message = document.querySelector('input[id="input_message"]').value;
        messageList.innerHTML += '<li class="sent">' + message + '</li>';
        socket.send(message);
    });


const locStatus = document.getElementById('location_status');
const locBtn = document.querySelector('.location');

const error = () => {
    locStatus.innerHTML = 'Невозможно получить ваше местоположение'
}
const success = (position) => {
    locStatus.innerHTML = 'Success'
    const pos = `${position.coords.latitude}/${position.coords.longitude}`;
    socket.send(pos)
}
locBtn.addEventListener('click', () => {
    socket.onmessage = function(event) {
        let msg = `https://www.openstreetmap.org/#map=17/${event.data}`;
        messageList.innerHTML += '<li class="recieved"><a href="' + msg + '" target="_blank">' + msg + '</a></li>'
    }
    if (!navigator.geolocation) {
        locStatus.innerHTML = 'Geolocation не поддерживается вашим браузером'
    } else {
        locStatus.innerHTML = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
            }
})