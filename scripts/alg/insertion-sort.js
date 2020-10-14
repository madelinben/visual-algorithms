async function insertSort() {
    let ms = calcDelay();

    for (let i = 1; i < divValue.length; i++) {
        let key = divValue[i];
        let j = i-1;

        highlight(i, 'pointer');
        await sleep(ms);

        while (j >= 0 && divValue[j] > key) {

            highlight(j, 'switch');
            highlight(j+1, 'switch');
            await sleep(ms);

            swap(j+1, j);

            update(j);
            update(j+1);

            highlight(j, 'lock');
            if (j==(i-1)) {
                highlight(j+1, 'lock')
            } else {
                highlight(j+1, 'restore');
            }
            await sleep(ms);

            j--;
        }

        for (let k=0;k<j;k++) {
            highlight(k, 'restore');
        }
        await sleep(ms);

        divValue[j + 1] = key;
    }

    divValue.forEach((val, index) => {
        highlight(index, 'restore');
    });
}