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

    const incBtnsArray = [jordanIncButton, blakeIncButton, toneIncButton, dillonIncButton, willIncButton, paulIncButton];
    const deBtnsArray = [jordanDeButton, blakeDeButton, toneDeButton, dillonDeButton, willDeButton, paulDeButton];

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
})