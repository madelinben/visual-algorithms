async function selectSort() {
    let ms = calcDelay();

    for (let i=0; i < divValue.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < divValue.length; j++) {

            if (divValue[minIndex] > divValue[j]) {
                minIndex = j;
            }
            highlight(j, 'restore');
        }

        highlight(i, 'pointer');
        highlight(minIndex, 'pointer');
        await sleep(ms);

        if (minIndex !== i) {
            swap(i, minIndex);

            update(i);
            update(minIndex);

            highlight(i, 'switch');
            highlight(minIndex, 'switch');
        } else {
            highlight(i, 'lock');
            highlight(minIndex, 'lock');
        }

        if (i>0) {
            highlight(i-1, 'restore');
        }
        await sleep(ms);
    }
    highlight(divValue.length-1, 'restore');
}