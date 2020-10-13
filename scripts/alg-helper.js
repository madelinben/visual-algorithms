let algBtn = document.querySelectorAll('.alg-select button');

for (let i=0; i<algBtn.length; i++) {
    algBtn[i].addEventListener('click', () => {

        disableBtn();
        algBtn[i].classList.add('alg-running');

        switch (algBtn[i].innerHTML) {
            case 'Bubble' : bubbleSort().then(r => { enableBtn(); algBtn[i].classList.remove('alg-running'); }).catch((err) => { console.log('Error Handling'); });
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

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function bubbleSort() {
    const inSpeed = document.getElementById('array-speed').value;

    let ms = 1000;
    switch(parseInt(inSpeed))
    {
        case 1: ms=500;
            break;
        case 2: ms=250;
            break;
        case 3: ms=100;
            break;
        case 4: ms=10;
            break;
        case 5: ms=1;
            break;
        default: ms=1000;
            break;
    }

    console.log(divValue);
    console.log('running');

    for (let i = 0; i < divValue.length; i++) {; //-1
        for (let j = 0; j < divValue.length-i-1; j++) {
            //HIGHLIGHT POINTER
            highlight(j, 'orange');
            highlight(j+1, 'orange');

            //DELAY
            await sleep(ms);

            if (divValue[j] > divValue[j + 1]) {
                //SWAP
                swap(j, j+1);

                //UPDATE DIV HEIGHT
                update(j);
                update(j+1);

                //HIGHLIGHT SWITCH
                highlight(j, 'mediumpurple');
                highlight(j+1, 'mediumpurple');
            } else {
                //HIGHLIGHT LOCK
                highlight(j, 'lightgreen');
                highlight(j+1, 'lightgreen');
            }

            //DELAY
            await sleep(ms);

            //RESTORE
            highlight(j, 'lightcoral');
            highlight(j+1, 'lightcoral');
        }
    }

    console.log(divValue);
    console.log('finished');
}

function selectSort() {

}

function insertSort() {

}

function mergeSort() {

}

function quickSort() {

}