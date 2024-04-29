let button = document.querySelector('#exp-btn');
console.dir(button);

// Adding an event listner to the button

button.addEventListener('click', function () {
    // first we will get the text from the both input fields...

    let expLabel = document.querySelector('#exp-label').value;
    let expAmount = document.querySelector('#exp-amount').value;

    console.log(expLabel + ' - ' + expAmount);

    //Now we will create the new li item and assign it the value as the values are added to variables

    let li = document.createElement('li');
    li.textContent = expLabel + ' - ' + expAmount;

    //Addind some margins here
    li.style.marginBottom="10px";

    // Now we will select the ul tag as append li as its child

    let ul = document.querySelector('#exp-ul');
    ul.appendChild(li);

    // Now the last step is to clear the values of the input fields;
    
    document.querySelector('#exp-label').value = "";
    document.querySelector('#exp-amount').value = "";


})