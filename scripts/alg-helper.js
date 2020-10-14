let algBtn = document.querySelectorAll('.alg-select button');

for (let i=0; i<algBtn.length; i++) {
    algBtn[i].addEventListener('click', () => {

        disableBtn();
        algBtn[i].classList.add('alg-running');

        switch (algBtn[i].innerHTML) {
            case 'Bubble' : bubbleSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });
                break;
            case 'Selection' : selectSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });;
                break;
            case 'Insertion' : insertSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });;
                break;
            case 'Merge' : mergeSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });;
                break;
            case 'Quick' : quickSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });;
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

function highlight(index, operation) {
    let color = operation;
    switch (operation) {
        case 'pointer':
            color = 'orange';
            break;
        case 'switch':
            color = 'mediumpurple';
            break;
        case 'lock':
            color = 'lightgreen';
            break;
        case 'restore':
            color = 'lightcoral';
            break;
    }

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