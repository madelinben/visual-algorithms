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
            case 'Quick' : updateDiv();
                break;
        }
    });
}

function updateDiv() {
    console.log('clicked');
    divElement.forEach((div, index) => {
        if (divValue[index]%2 == 0) {
            div.style.backgroundColor = 'green';
        } else {
            div.style.backgroundColor = 'red';
        }
    });
}