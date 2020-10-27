async function mergeSort () {
    let ms = calcDelay();

    /*update(i);
    highlight(i, 'pointer');
    await sleep(ms);*/

    console.log(divValue)

    divValue = split(divValue)

    divValue.forEach((val, index) => {
        update(index);
    });

    console.log(divValue)
}

function split(array) {
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(split(left), split(right))
}

function merge(left, right) {
    const array = [];

    while (left.length && right.length) {
        if(left[0]< right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }

    return array.concat(left.slice()).concat(right.slice());
}