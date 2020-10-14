async function bubbleSort() {
    let ms = calcDelay();

    for (let i = 0; i < divValue.length; i++) {; //-1
        for (let j = 0; j < divValue.length-i-1; j++) {
            highlight(j, 'pointer');
            highlight(j+1, 'pointer');

            await sleep(ms);

            if (divValue[j] > divValue[j + 1]) {
                swap(j, j+1);

                update(j);
                update(j+1);

                highlight(j, 'switch');
                highlight(j+1, 'switch');
            } else {
                highlight(j, 'lock');
                highlight(j+1, 'lock');
            }

            await sleep(ms);

            highlight(j, 'restore');
            highlight(j+1, 'restore');
        }
    }
}