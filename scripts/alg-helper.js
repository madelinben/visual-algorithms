let algBtn = document.querySelectorAll('.alg-select button');

for (let i=0; i<algBtn.length; i++) {
    algBtn[i].addEventListener('click', () => {

        disableBtn();
        algBtn[i].classList.add('alg-running');

        switch (algBtn[i].innerHTML) {
            case 'Bubble':
                bubbleSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });
                break;
            case 'Selection' : selectSort();
                break;
            case 'Insertion' : insertSort();
                break;
            case 'Merge' : mergeSort();
                break;
            case 'Quick' : quickSort();
                break;
        }
    });
}

function disableBtn() {
    for(let i=0; i<algBtn.length; i++) {
        algBtn[i].disabled=true;
        btnSetup.disabled=true;
    }
}

function enableBtn() {
    for(let i=0; i<algBtn.length; i++) {
        algBtn[i].disabled=false;
        btnSetup.disabled=false;
    }
}

function swap(left, right) {
    let temp = divValue[left];
    divValue[left] = divValue[right];
    divValue[right] = temp;
}

function highlight(index, color) {
    divElement[index].style.backgroundColor = color;
}

function update(index) {
    divElement[index].style.height = divValue[index] + '%';
}

function calcDelay() {
    const inSpeed = document.getElementById('array-speed').value;

    let milliseconds = 1000;
    switch(parseInt(inSpeed)) {
        case 1: milliseconds=1;
            break;
        case 2: milliseconds=10;
            break;
        case 3: milliseconds=100;
            break;
        case 4: milliseconds=250;
            break;
        case 5: milliseconds=500;
            break;
        default: milliseconds=1000;
            break;
    }
    return (500/(Math.floor(divValue.length/10)*milliseconds));
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function selectSort() {

}

function insertSort() {

}

function mergeSort() {

}

function quickSort() {

}