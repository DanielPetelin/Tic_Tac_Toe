for (var i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML+='<div class="block"></div>';
}

var hod = 0;

document.getElementById('game').onclick = function(evnt) {
    console.log(event);
    if (event.target.className == 'block') {
        if (hod % 2 == 0) {
           event.target.innerHTML = 'x'; 
        } else {
            event.target.innerHTML = '0'; 
        }
        hod++;
        checkWinner();
    }
    function checkWinner() {
        var allblock = document.getElementsByClassName('block');
        //console.log('allblock');
        if (allblock[0].innerHTML == 'x' || allblock[1].innerHTML == 'x' || allblock[2].innerHTML == 'x') {
            alert('победа крестиков')
        }
    }
}