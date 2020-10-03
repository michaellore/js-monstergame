const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(attackType) {
    let maxDamage;
    if (attackType === 'ATTACK') {
        maxDamage = ATTACK_VALUE;
    } else if (attackType === 'STRONG_ATTACK') {
        maxDamage = STRONG_ATTACK_VALUE;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(maxDamage);
    currentPlayerHealth -= playerDamage;

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost');
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('Draw');
    }
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler)