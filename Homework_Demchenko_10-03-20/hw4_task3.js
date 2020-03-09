let inputArr = [1, 2, 3, 4, 5];
let inputArr2 = ['a', 'b', 'c'];
console.log(inputArr);

function my_pop(arr){
    let popedEl = arr[arr.length-1];
    arr.length = arr.length-1;
    return popedEl;
}

function my_push(arr, el){
    arr[arr.length] = el;
    return arr;
}

function my_shift(arr){
    let shiftedEl = arr[0];
    for (let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length -= 1;
    return shiftedEl;
}

function my_unshift(arr, el){
    arr.length += 1;
    for (let i = arr.length-1; i >=0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = el;
    return arr;
}

function my_concat(arr, arr2){
    arr.length += arr2.length;
    let arr2IndexCounter = 0;
    for(let i = arr.length - arr2.length; i < arr.length; i++){
        arr[i] = arr2[arr2IndexCounter];
        arr2IndexCounter += 1;
    }
    return arr;
}

//console.log(my_pop(inputArr));
//console.log(my_push(inputArr, 6));
//console.log(my_shift(inputArr));
//console.log(my_unshift(inputArr, 6));
console.log(my_concat(inputArr, inputArr2));
