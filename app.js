document.addEventListener('DOMContentLoaded', function () {

    const jordanIncButton = document.getElementById('jordanIncrementButton');
    const blakeIncButton = document.getElementById('blakeIncrementButton');
    const toneIncButton = document.getElementById('toneIncrementButton');
    const dillonIncButton = document.getElementById('dillonIncrementButton');
    const willIncButton = document.getElementById('willIncrementButton');
    const paulIncButton = document.getElementById('paulIncrementButton');

    const jordanDeButton = document.getElementById('jordanDecrementButton');
    const blakeDeButton = document.getElementById('blakeDecrementButton');
    const toneDeButton = document.getElementById('toneDecrementButton');
    const dillonDeButton = document.getElementById('dillonDecrementButton');
    const willDeButton = document.getElementById('willDecrementButton');
    const paulDeButton = document.getElementById('paulDecrementButton');

    const jordanIncFiveButton = document.getElementById('jordanIncrementFiveButton');
    const blakeIncFiveButton = document.getElementById('blakeIncrementFiveButton');
    const toneIncFiveButton = document.getElementById('toneIncrementFiveButton');
    const dillonIncFiveButton = document.getElementById('dillonIncrementFiveButton');
    const willIncFiveButton = document.getElementById('willIncrementFiveButton');
    const paulIncFiveButton = document.getElementById('paulIncrementFiveButton');

    const jordanDeFiveButton = document.getElementById('jordanDecrementFiveButton');
    const blakeDeFiveButton = document.getElementById('blakeDecrementFiveButton');
    const toneDeFiveButton = document.getElementById('toneDecrementFiveButton');
    const dillonDeFiveButton = document.getElementById('dillonDecrementFiveButton');
    const willDeFiveButton = document.getElementById('willDecrementFiveButton');
    const paulDeFiveButton = document.getElementById('paulDecrementFiveButton');

    const incBtnsArray = [jordanIncButton, blakeIncButton, toneIncButton, dillonIncButton, willIncButton, paulIncButton];
    const deBtnsArray = [jordanDeButton, blakeDeButton, toneDeButton, dillonDeButton, willDeButton, paulDeButton];
    const incFiveBtnsArray = [jordanIncFiveButton, blakeIncFiveButton, toneIncFiveButton, dillonIncFiveButton, willIncFiveButton, paulIncFiveButton];
    const deFiveBtnsArray = [jordanDeFiveButton, blakeDeFiveButton, toneDeFiveButton, dillonDeFiveButton, willDeFiveButton, paulDeFiveButton];

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
})