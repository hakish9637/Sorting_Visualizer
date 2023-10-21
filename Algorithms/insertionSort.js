async function insertionSort(array)
{
  if(hasPressedStop == true)
   {
       return;
   }
    let bars = document.getElementsByClassName("bar");
    for(let i=0;i<array.length;i++)
    {
       let j= i;
       while(j > 0 && array[j-1] > array[j])
       {
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
        bars[j-1].style.height = array[j-1] * heightFactor  + "px";
        bars[j-1].style.backgroundColor = "lightGreen";
        bars[j].style.height = array[j] * heightFactor  + "px";
        bars[j].style.backgroundColor = "lightGreen";
        j--;
        await sleep(30);
       }
      await sleep(30);
    }

    return array;
}