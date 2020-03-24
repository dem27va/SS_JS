const nameInput = document.getElementById('nameInput');
nameInput.value = '';

nameInput.addEventListener('input', () => {
    console.log(nameInput.value);
    console.log(nameInput.value.length);
      
    lastChar = nameInput.value.slice(-1);

    let regExp = /[0-9]/;
    console.log(regExp.test(lastChar));

    if(regExp.test(lastChar)) {
        nameInput.value = nameInput.value.slice(0, (nameInput.value.length-1));
    }
    console.log(nameInput.value);

})