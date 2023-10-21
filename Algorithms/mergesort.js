async function merge(array, low, mid, high) {
  let bars = document.getElementsByClassName("bar");
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if(hasPressedStop == true)
            {
                return;
            }
      if (array[left] <= array[right]) {
          bars[left].style.backgroundColor = "lightGreen";
          temp.push(array[left]);
          left++;
      } else {
          bars[right].style.backgroundColor = "Green";
          temp.push(array[right]);
          right++;
      }
  }
  while (left <= mid) {
    if(hasPressedStop == true)
            {
                return;
            }
      bars[left].style.backgroundColor = "lightGreen";
      temp.push(array[left]);
      left++;
  }
  while (right <= high) {
    if(hasPressedStop == true)
            {
                return;
            }
      bars[right].style.backgroundColor = "Green";
      temp.push(array[right]);
      right++;
  }

  // Assuming you want to visually represent the changes, you might want to add some delay here.
  // For example:
  await sleep(150);

  // Copy elements of temp back to array
  for (let i = low; i <= high; i++) {
      array[i] = temp[i - low];
      bars[i].style.height = array[i] * heightFactor  + "px";
      bars[i].style.backgroundColor = "blue"; // Resetting the color to default after sorting
  }
}

async function mergesort(array, low, high) {
  if (low >= high) {
      return;
  }
  let mid = Math.floor((low + high) / 2);
  await mergesort(array, low, mid);
  await mergesort(array, mid + 1, high);
  await merge(array, low, mid, high);
  return array;
}

