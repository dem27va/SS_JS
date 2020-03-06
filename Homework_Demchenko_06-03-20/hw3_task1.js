function createArray(col, row){
    let result = [];
    for (let i = 0 ; i < row; i++) {
        result[i] = [];
        for (let j = 0; j < col; j++) {
            result[i][j] = Math.floor(Math.random() * (100 - 1) + 1);
        }
    }
    return result;
}

function sumOfMin(arr){
    let sum = 0;
   
       for (let ii = 0; ii < arr.length; ii++){
       let minVal = arr[ii][0];
       for (let jj = 0; jj < arr[ii].length; jj++) {
           if (minVal > arr[ii][jj]) minVal = arr[ii][jj];
           }
       console.log(minVal);
       sum = sum + minVal;
       }
   return sum;
   }  

   let col = prompt('Введите количество столбцов');
   let row = prompt('Введите количество сттрок');
   
   let inputArray = createArray(col, row);
   console.log(inputArray);

   console.log(sumOfMin(inputArray));