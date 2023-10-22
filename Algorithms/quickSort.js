async function partition(array,low,high)
{ 
  let bars = document.getElementsByClassName("bar");
  let pivot = array[low];
  let i = low;
  let j = high;
  bars[low].style.backgroundColor = "red";

  for (let k = 0; k < bars.length; k++) {
    if (k != low) {
      bars[k].style.backgroundColor = "aqua";
    }
  }

  while(i<j)
       {
           while(array[i] <= pivot && i <= high-1)
              {
                if(hasPressedStop == true){
                  return;
              }
                  i++;
                  bars[i].style.height = array[i] * heightFactor + "px";
                  bars[i].style.backgroundColor = "lightgreen";
                  await sleep(150);
              }
            while(array[j] > pivot && j >= low+1)
            {
              if(hasPressedStop == true){
                return;
            }
                j--;
                bars[j].style.height = array[j] * heightFactor + "px";
                bars[j].style.backgroundColor = "orange";
                await sleep(150);
            }
            if(i<j)
              {
                if(hasPressedStop == true){
                  return;
              }
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;

                bars[i].style.height = array[i] * heightFactor + "px";
                bars[i].style.backgroundColor = "lightgreen";

                bars[j].style.height = array[j] * heightFactor + "px";
                bars[j].style.backgroundColor = "lightgreen";
                await sleep(150);

              }
       }
       let temp = array[low];
       array[low] = array[j];
       array[j] = temp;

       bars[low].style.height = array[low] * heightFactor + "px";
       bars[low].style.backgroundColor = "lightgreen";

       bars[j].style.height = array[j] * heightFactor + "px";
       bars[j].style.backgroundColor = "lightgreen";
       await sleep(150);
       return j;
}
async function quickSort(array,low,high)
{
    let bars = document.getElementsByClassName("bar");
    if(low < high)
    {
        let index =  await partition(array,low,high);
       await quickSort(array,low,index-1);
       await quickSort(array,index+1,high);
    }

    for (let i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = "green";
      }

}