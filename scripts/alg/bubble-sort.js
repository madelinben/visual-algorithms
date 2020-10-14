async function bubbleSort() {
    let ms = calcDelay();

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