let bars = document.getElementsByClassName("bar");

function swap(i, j) {    
    let temp = i.style.height;    //third variable for swapping
    i.style.height = j.style.height;
    j.style.height = temp;

    i.style.height = i * heightFactor  + "px";
    i.style.backgroundColor = "lightGreen";
    j.style.height= j * heightFactor  + "px";
    j.style.backgroundColor = "lightGreen";
}
async function heapify(array,n,i)
{
    let l = 2*i;
    let r = 2*i+1;
    let largest=i;

    if(l<n && array[largest] < array[l] )
    {
        largest = l;
    }
    if(r<n && array[largest] < array[r] )
    {
        largest = r;
    }

    if(largest != i)
    {
        swap(array[i],array[largest]);
        await heapify(array,n,largest);
    }
}
async function buildHeap(array,n)
{
    for(let i=n/2;i>=0;i--)
       await heapify(array,n,i);
}
async function heapSort(array,n)
{
   builHeap(array,n)
   for(let i=n-1;i>=0;i--)
   {

    var temp = bar[0];
    bar[0] = bar[i];
    bar[i] = temp;
    bar[0].style.background = 'cyan';
    bar[i].style.background = 'green';
      swap(array[0],array[i]);
     await heapify(array,i,0);

   }
}