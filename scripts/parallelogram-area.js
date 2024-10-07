function calculateParallelogramArea(){
    // get base of the parallelogram

    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const parallelogramBaseText = parallelogramBaseInput.value
    const parallelogramBase = parseFloat(parallelogramBaseText)
    // console.log(parallelogramBase);


    // get height of the parallelogram

    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const parallelogramHeightText = parallelogramHeightInput.value;
    const parallelogramHeight = parseFloat(parallelogramBaseText);
    // console.log(parallelogramHeight);

    // calculate parallelogram area:

    const area = parallelogramBase * parallelogramHeight;
    console.log('area of the parallelogram: ', area);

    // display parallelogram area:
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;
}