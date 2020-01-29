document.addEventListener('DOMContentLoaded', function () {

    const playerOneIncButton = document.getElementById('playerOneIncrementButton');
    const playerTwoIncButton = document.getElementById('playerTwoIncrementButton');
    const playerThreeIncButton = document.getElementById('playerThreeIncrementButton');
    const playerFourIncButton = document.getElementById('playerFourIncrementButton');
    const playerFiveIncButton = document.getElementById('playerFiveIncrementButton');
    const playerSixIncButton = document.getElementById('playerSixIncrementButton');

    const playerOneDeButton = document.getElementById('playerOneDecrementButton');
    const playerTwoDeButton = document.getElementById('playerTwoDecrementButton');
    const playerThreeDeButton = document.getElementById('playerThreeDecrementButton');
    const playerFourDeButton = document.getElementById('playerFourDecrementButton');
    const playerFiveDeButton = document.getElementById('playerFiveDecrementButton');
    const playerSixDeButton = document.getElementById('playerSixDecrementButton');

    const playerOneIncFiveButton = document.getElementById('playerOneIncrementFiveButton');
    const playerTwoIncFiveButton = document.getElementById('playerTwoIncrementFiveButton');
    const playerThreeIncFiveButton = document.getElementById('playerThreeIncrementFiveButton');
    const playerFourIncFiveButton = document.getElementById('playerFourIncrementFiveButton');
    const playerFiveIncFiveButton = document.getElementById('playerFiveIncrementFiveButton');
    const playerSixIncFiveButton = document.getElementById('playerSixIncrementFiveButton');

    const playerOneDeFiveButton = document.getElementById('playerOneDecrementFiveButton');
    const playerTwoDeFiveButton = document.getElementById('playerTwoDecrementFiveButton');
    const playerThreeDeFiveButton = document.getElementById('playerThreeDecrementFiveButton');
    const playerFourDeFiveButton = document.getElementById('playerFourDecrementFiveButton');
    const playerFiveDeFiveButton = document.getElementById('playerFiveDecrementFiveButton');
    const playerSixDeFiveButton = document.getElementById('playerSixDecrementFiveButton');

    const incBtnsArray = [playerOneIncButton, playerTwoIncButton, playerThreeIncButton, playerFourIncButton, playerFiveIncButton, playerSixIncButton];
    const deBtnsArray = [playerOneDeButton, playerTwoDeButton, playerThreeDeButton, playerFourDeButton, playerFiveDeButton, playerSixDeButton];
    const incFiveBtnsArray = [playerOneIncFiveButton, playerTwoIncFiveButton, playerThreeIncFiveButton, playerFourIncFiveButton, playerFiveIncFiveButton, playerSixIncFiveButton];
    const deFiveBtnsArray = [playerOneDeFiveButton, playerTwoDeFiveButton, playerThreeDeFiveButton, playerFourDeFiveButton, playerFiveDeFiveButton, playerSixDeFiveButton];

    incBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth += 1;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    deBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth -= 1;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    incFiveBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth += 5;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    deFiveBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth -= 5;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    const playerOrderButton = document.getElementById('playerOrderButton');
    const playerOrder = ['Blue', 'Red', 'Green', 'Yellow', 'Pink', 'Salmon'];

    function firstPlayer() {
        randomPlayerOrder = playerOrder[Math.floor(Math.random() * playerOrder.length)];
    }

    playerOrderButton.addEventListener('click', () => {
        firstPlayer();
        alert (`${randomPlayerOrder} player goes first`)
    });

    const sixSidedButton = document.getElementById('sixSidedDie');
    const sixSidedDieArray = ['1', '2', '3', '4', '5', '6'];

    function dieRoll() {
        randomDieRoll = sixSidedDieArray[Math.floor(Math.random() * sixSidedDieArray.length)];
    }

    sixSidedButton.addEventListener('click', () => {
        dieRoll();
        alert (`The d6 rolls ${randomDieRoll}`)
    });

    const coinFlipButton = document.getElementById('coinFlip');
    const coinFlipArray = ['Heads', 'Tails'];

    function flipACoin() {
        randomCoinFlip = coinFlipArray[Math.floor(Math.random() * coinFlipArray.length)];
    }

    coinFlipButton.addEventListener('click', () => {
        flipACoin();
        alert (`The coin lands on ${randomCoinFlip}`)
    });
})