let algBtn = document.querySelectorAll('.alg-select button');

for (let i=0; i<algBtn.length; i++) {
    algBtn[i].addEventListener('click', () => {

        //Highlight alg button
        algBtn[i].classList.add('alg-running');
        /*algBtn[i].classList.remove('alg-running');*/

        switch (algBtn[i].innerHTML) {
            case 'Bubble' : bubbleSort();
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

function highlight(index) {
    divElement[index].style.backgroundColor = 'orange';
}

function update(index) {
    divElement[index].style.height = divValue[index] + '%';
}

function restore(index) {
    divElement[index].style.backgroundColor = 'lightcoral';
}

function swap(index1, index2) {
    let temp = divValue[index1];
    divValue[index1] = divValue[index2];
    divValue[index2] = temp;
}

function bubbleSort() {

    //INC INTERVAL
    for (let i = 0; i < divValue.length; i++) {
        for (let j = 0; j < divValue.length; j++) {

            //HIGHLIGHT

            //SWAP
            if (divValue[j] > divValue[j + 1]) {
                let temp = divValue[j];
                divValue[j] = divValue[j + 1];
                divValue[j + 1] = temp;

                //UPDATE
                update(j);
                update(j+1);
            }
        }
        //LOCK
    }

    /*let stepTimer = setInterval(function () {

    }, 100);
    clearInterval(stepTimer);*/
}

function selectSort() {

}

function insertSort() {

}

function mergeSort() {

}

function quickSort() {

}