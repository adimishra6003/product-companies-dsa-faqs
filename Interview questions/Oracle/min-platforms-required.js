// Link - https://www.geeksforgeeks.org/dsa/minimum-number-platforms-required-railwaybus-station/

function minPlatform(arr, dep) {
  let n = arr.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    // Initially one platform is needed
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j)
        if (arr[i] >= arr[j] && dep[j] >= arr[i]) {
          // Increment cnt if trains have overlapping
          // time.
          cnt++;
        }
    }
    res = Math.max(cnt, res);
  }
  return res;
}

// Driver Code
let arr = [1000, 935, 1100];
let dep = [1200, 1240, 1130];
console.log(minPlatform(arr, dep));
