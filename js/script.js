for (var i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}

document.getElementById('game').onclick = function(evnt) {
    console.log(event);
    if (event.target.className == 'block') {
        this.innerHTML = '0'
    }
}