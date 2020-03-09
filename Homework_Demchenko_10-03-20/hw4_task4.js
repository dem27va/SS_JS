let inputArr = ['Apple', 'Banana', 'Pineapple', 'Blueberry'];

function map_reduce(arr){
    console.log(arr.reduce((pr, el) => {
        pr.push(el[0]);
        return pr;
    }, []));
}

function filter_reduce(arr){
    console.log(arr.reduce((pr, el) => {
        if (el[0].toLowerCase() == 'b'){
            pr.push(el);
        }
            return pr;        
    }, []));
}

function forEach_reduce(arr){
    console.log(arr.reduce((pr, el) => {        
        pr.push(`${pr.length+1}: ${el};`);
        return pr;
    }, []));
}


//map_reduce(inputArr);
//filter_reduce(inputArr);
forEach_reduce(inputArr);
