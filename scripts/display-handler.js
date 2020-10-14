let divValue = [];
let divElement = [];

const btnSetup = document.getElementById('array-setup');

btnSetup.addEventListener('click', () => {
    let container = document.getElementById('content-container');

    let inSize = document.getElementById('array-size').value;
    const MARGIN = 1;

    container.innerHTML = '';
    for (let i = 0; i < inSize; i++) {
        let rndNumber = Math.floor(Math.random() * 100) + 1;

        divValue[i] = rndNumber;
        divElement[i] = document.createElement('div');

        container.appendChild(divElement[i]);
        let divWidth = (window.innerWidth/inSize) - (2*MARGIN);
        let divHeight = rndNumber + '%';

        divElement[i].style.margin = '0px ' + MARGIN + 'px';
        divElement[i].style.backgroundColor = 'lightcoral';
        divElement[i].style.width = divWidth + 'px';
        divElement[i].style.height = divHeight;
        divElement[i].style.display = 'inline-block';
    }
});