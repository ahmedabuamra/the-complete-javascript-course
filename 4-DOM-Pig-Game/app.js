/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, player, current;

init();

function init(){
    scores = [0,0];
    player = 0;
    current = 0;
    document.getElementById("score-0").textContent = '0';
    document.getElementById("score-1").textContent = '0';
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById("dice").style.display = 'none';
	document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}

function change(){
    current = 0;
    player = 1 - player;
	document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById("current-0").textContent = '0';
    document.getElementById("current-1").textContent = '0';
    document.getElementById("dice").style.display = 'none';
}

document.getElementById("btn-roll").addEventListener('click', function(){
    var randVal = Math.floor(Math.random() * 6) + 1;
    document.getElementById("dice").style.display = 'block'
    document.getElementById("dice").src = 'dice-' + randVal + '.png';
    //console.log(document.getElementById("dice").classList.src);
    if(randVal === 1){
        change();
    }else{
        current += randVal;
        document.getElementById("current-"+player).textContent = current;
    }
});

document.getElementById("btn-hold").addEventListener('click', function(){
    scores[player] += current;
    document.getElementById("score-"+player).textContent = scores[player];
    change(); 
});

document.getElementById("btn-new").addEventListener('click', init);