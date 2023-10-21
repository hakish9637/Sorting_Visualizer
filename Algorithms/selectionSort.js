async function selectionSort(array)
{
    let bars = document.getElementsByClassName("bar");
    for(let i=0;i<array.length-1;i++)
    {
        let mini = i;
        for(let j=i;j<array.length;j++)
        {
           if(array[j] < array[mini]) {
              mini = j; 
              await sleep(30);
           }
        }
        let temp = array[mini];
        array[mini] = array[i];
        array[i] = temp;
        bars[mini].style.height = array[mini] * heightFactor + "px";
        bars[mini].style.backgroundColor = "lightGreen";
        bars[i].style.height = array[i] * heightFactor+ "px";
        bars[i].style.backgroundColor = "lightGreen";
        await sleep(30);
    }
    return array;
}