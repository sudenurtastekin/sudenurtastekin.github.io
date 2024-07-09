let advices = [];

function renderAdvices() {
    document.querySelector('#adviceText').innerText = advices.slip.advice;
		document.querySelector('#adviceId').innerText = `ADVICE #${advices.slip.id}`
}

function init() {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(res => {
            advices = res;
            renderAdvices();
        })
}

document.querySelector('#advice-button').addEventListener('click',init);

init();