function merge(arr, left, mid, right) {
   let i = left;
   let j = mid + 1;
   let k = left;

   while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
      else sorted[k++] = arr[j++];
   }

   if (i < mid) {
      for (; j  <= right; j++) sorted[k++] = arr[j++];
   }
   else {
      for (; i <= mid; i++) sorted[k++] = arr[i++];
   }

   for(let x = left; x <= right; x++) {
      arr[x] = sorted[x];
   }
}

function mergeSort(arr, left, right) {

   if (left < right) {
      let mid = parseInt((left + right) / 2);
      mergeSort(arr, left, mid);
      mergeSort(arr, mid+1, right);
      merge(arr, left, mid, right);
   }
}

/* 선택 정렬의 시간 측정 */
// 0부터 999까지의 정수 30000개를 담은 배열 생성 (랜덤)
let arr = Array.from({ length: 100000}, () => Math.floor(Math.random() * 1000));

// getTime(): 1970-01-01부터의 시간차를 ms 단위로 계산
let startTime = new Date().getTime();
sorted = Array.from({ length: 100000}, () => 0);
let endTime = new Date().getTime();

console.log('선택 정렬 소요 시간:', endTime - startTime, 'ms.');


arr = Array.from({ length: 30000}, () => 7);

startTime = new Date().getTime();
sorted = Array.from({ length: 100000}, () => 0);
endTime = new Date().getTime();

console.log('정렬된 배열에 대한 선택 정렬 소요 시간:', endTime - startTime, 'ms.');