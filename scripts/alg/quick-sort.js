async function quickSort() {
    await sort(0, divValue.length - 1);
}

async function sort(start, end) {
    if (start < end) { //break
        let pivotIndex = await partition(start, end);
        await sort(start, pivotIndex-1); //left
        await sort(pivotIndex+1, end); //right
    }
}

async function partition(start, end) {
    let ms = calcDelay();

    let pivotIndex = start;
    let pivotValue = divValue[end];

    for (let i=start; i<end; i++) {
        highlight(pivotIndex, 'pointer');
        highlight(i, 'pointer');

        await sleep(ms);

        if (divValue[i] < pivotValue) {
            swap(i, pivotIndex);

            update(i);
            update(pivotIndex);

            highlight(i, 'switch');
            highlight(pivotIndex, 'switch');

            pivotIndex++;
        } else {
            highlight(i, 'lock');
            highlight(pivotIndex, 'lock');
        }
        await sleep(ms);
    }
    swap(pivotIndex, end);

    update(pivotIndex);
    update(end);

    highlight(pivotIndex, 'switch');
    highlight(end, 'switch');

    await sleep(ms);

    divValue.forEach((val, index) => {
        highlight(index, 'restore');
    });

    return pivotIndex;
}