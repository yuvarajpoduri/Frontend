let cards = [];
let sum = 0;
let hasalive = true;
let haswon = false;
let message = "";
let messager = document.getElementById("heading");
let sumr = document.getElementById("sum");
let cardsr = document.getElementById("cards");

function start() {
    messager.textContent = "Want to play a round?";
    cards = [];
    sum = 0;
    hasalive = true;
    haswon = false;
    render();
}

function getrandomcard() {
    let num = Math.floor(Math.random() * 13) + 1;
    if (num > 10) {
        return 10;
    } else if (num === 1) {
        return 11;
    } else {
        return num;
    }
}

function render() {
    if (cardsr) {
        cardsr.textContent = "Cards: ";
        for (let i = 0; i < cards.length; i++) {
            cardsr.textContent += cards[i] + " ";
        }
    }

    if (sumr) {
        sumr.textContent = "Sum: " + sum;
    }

    if (messager) {
        if (sum <= 20) {
            messager.style.color = 'yellow';
            message = "Do you want to draw a new card?";
        } else if (sum === 21) {
            messager.style.color = 'aqua';
            message = "You won! 🏅";
            haswon = true;
            hasalive = false;
        } else {
            messager.style.color = 'red';
            message = "You lost!";
            hasalive = false;
        }
        messager.textContent = message;
    }
}

function newcard() {
    if (hasalive && !haswon) {
        let card = getrandomcard();
        sum += card;
        cards.push(card);
        render();
    }
}
