let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let stop_btn = document.getElementById("stop_btn");
let heightFactor = 20;
let minRange = 1;
let maxRange = 20;
let numOfBars = 20;
let unsorted_array = new Array(numOfBars);


function randomNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1) + min);
}

let algotouse = "";

select_algo.addEventListener("change", function () {
  algotouse = select_algo.value;
});

function createRandomArray()
{
   for(let i=0;i<numOfBars;i++)
   {
    unsorted_array[i] = randomNum(minRange,maxRange);
   }
}

document.addEventListener("DOMContentLoaded", function(){
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array)
{
  for(let i=0;i<array.length;i++)
  {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height=array[i] * heightFactor  + "px";
    bars_container.appendChild(bar);
  }
}

randomize_array.addEventListener("click" , function(){
createRandomArray();
bars_container.innerHTML="";
renderBars(unsorted_array);
hasPressedStop = false;
});

function sleep(ms)
{
    return new Promise((resolve) => setTimeout(resolve,ms));
}


sort_btn.addEventListener("click", function () {
    switch (algotouse) {
      case "bubble":
        bubblesort(unsorted_array);
        break;
      case "merge":
       let n = unsorted_array.length;
       mergesort(unsorted_array,0,n-1);
        break;
      case "heap":
        HeapSort(unsorted_array);
        break;
      case "insertion":
        insertionSort(unsorted_array);
        break;
      case "selection":
        selectionSort(unsorted_array);
        break;
      case "quick":
        console.log(unsorted_array.length);
        quickSort(unsorted_array, 0, unsorted_array.length - 1);
        break;
      default:
        bubblesort(unsorted_array);
        break;
    }
  });
  stop_btn.addEventListener("click" , function (){
    hasPressedStop = true;
  });