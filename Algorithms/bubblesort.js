async function bubblesort(array)
{
    // bubbleSort
    let bars = document.getElementsByClassName("bar");
    for(let i=0;i<array.length;i++)
    {
        for(let j=0;j<array.length-1;j++)
        {
            if(hasPressedStop == true)
            {
                return;
            }
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                bars[j].style.height = array[j] * heightFactor  + "px";
                bars[j].style.backgroundColor = "lightGreen";
                bars[j+1].style.height= array[j+1] * heightFactor  + "px";
                bars[j+1].style.backgroundColor = "lightGreen";
                await sleep(40);
            }
        }
        bars[bars.length-1-i].style.background = 'green';

        await sleep(40);
    }
    return array;
}