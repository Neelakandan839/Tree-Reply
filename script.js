const messageInput = document.querySelector('.text');
const reply = document.querySelectorAll('.btn');
const message = document.querySelector('.msg');


function click(e) {
    if (messageInput.value === '') {
        alert('Cannot send empty message');
    } else {
        var msg = document.createElement('h1');
        msg.innerHTML = `${messageInput.value} <button class='btn' onclick='Reply()'>Reply</button>`;
        message.appendChild(msg)
        messageInput.value = '';
    }
}

function Reply() {
    if (messageInput.value === '') {
        alert('Cannot send empty message');
    } else {
        click();
    }
}
for (var i = 0; i < reply.length; i++) {
    reply[i].addEventListener('click', Reply)
}


