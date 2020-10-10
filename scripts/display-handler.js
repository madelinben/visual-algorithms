let divValue = [];
let divElement = [];

const btnSetup = document.getElementById('array-setup');

btnSetup.addEventListener('click', () => {
    let container = document.getElementById('content-container');

    /*container.style = 'flex-direction: row;';*/
    let inSize = document.getElementById('array-size').value;
    let inSpeed = document.getElementById('array-speed').value;

    let divMargin = 1;
    let scaledWidth = (window.innerWidth/inSize) - (2*divMargin);
    console.log('clicked: size=' + inSize + ' speed=' + inSpeed);
    console.log('win=' + window.innerWidth + ' divW=' + (window.innerWidth/inSize) + ' scale=' + scaledWidth);


    //Fill array with random values to the specified size
    container.innerHTML = '';
    for (let i = 0; i < inSize; i++) {
        let rndNumber = Math.floor(Math.random() * 100) + 1;

        divValue[i] = rndNumber;
        divElement[i] = document.createElement('div');

        container.appendChild(divElement[i]);
        let divWidth = (window.innerWidth/inSize) - (2*divMargin); //20% padding to center
        let divHeight = rndNumber + '%';

        console.log(rndNumber);
        /*divElement[i].style = '';*/

        divElement[i].style.margin = '0px ' + divMargin + 'px';
        divElement[i].style.backgroundColor = 'lightcoral';
        divElement[i].style.width = divWidth + 'px';
        divElement[i].style.height = divHeight;
        divElement[i].style.display = 'inline-block';

        /*divElement[i].style.position = 'absolute';
        divElement[i].style.marginBottom = '0';*/
    }
});

/*
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
});*/
