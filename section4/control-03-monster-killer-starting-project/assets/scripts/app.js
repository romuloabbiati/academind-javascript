const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster.', '100');

let chosenMaxLife = parseInt(enteredValue);

let battleLog = [];

if(isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
    };

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry = {
                event: ev,
                value: val,
                target: 'MONSTER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        case LOG_EVENT_MONSTER_ATTACK:
                logEntry = {
                    event: ev,
                    value: val,
                    target: 'PLAYER',
                    finalMonsterHealth: monsterHealth,
                    finalPlayerHealth: playerHealth
                };
                break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry = {
                event: ev,
                value: val,
                target: 'PLAYER',
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;

        case LOG_EVENT_GAME_OVER:
            logEntry = {
                event: ev,
                value: val,
                finalMonsterHealth: monsterHealth,
                finalPlayerHealth: playerHealth
            };
            break;
        default:
            logEntry = {};
    }

    // if(ev === LOG_EVENT_PLAYER_ATTACK) {
    //     logEntry.target = 'MONSTER';
    // } else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'MONSTER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if(ev === LOG_EVENT_MONSTER_ATTACK) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if(ev === LOG_EVENT_PLAYER_HEAL) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         target: 'PLAYER',
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // } else if(ev === LOG_EVENT_GAME_OVER) {
    //     logEntry = {
    //         event: ev,
    //         value: val,
    //         finalMonsterHealth: monsterHealth,
    //         finalPlayerHealth: playerHealth
    //     };
    // }
    battleLog.push(logEntry);
}

function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if(currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!')
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!')
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'MONSTER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    } else if(currentPlayerHealth <= 0 && currentMonsterHealth <= 0){
        alert('You have a draw!')
        writeToLog(
            LOG_EVENT_GAME_OVER, 
            'A DRAW', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
        reset();
    }
}

function attackMonster(mode) {
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal further than your max initial health!");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );
    endRound();
}

function printLogHandler(){
    for(let i = 0; i < 3; i++) {
        console.log("-----------");
    }

    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 3);

    // for(let i = 0; i < battleLog.length; i++) {
    //     console.log(battleLog[i]);
    // }
    // console.log(battleLog);

    let i = 0;
    for(const logEntry of battleLog) {
        console.log(`#${i}`);
        for(const key in logEntry) {
            console.log(`${key} => ${logEntry[key]}`)
        }
        i++
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);