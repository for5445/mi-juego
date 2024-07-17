function attack(player) {
    const hpElement = document.getElementById(player === 'player1' ? 'hp2' : 'hp1');
    let currentHp = parseInt(hpElement.textContent);
    const damage = Math.floor(Math.random() * 20) + 1;
    currentHp -= damage;

    if (currentHp < 0) currentHp = 0;

    hpElement.textContent = currentHp;

    if (currentHp === 0) {
        alert(`${player === 'player1' ? 'Jugador 2' : 'Jugador 1'} ha ganado!`);
        resetGame();
    }
}

function resetGame() {
    document.getElementById('hp1').textContent = '100';
    document.getElementById('hp2').textContent = '100';
}
