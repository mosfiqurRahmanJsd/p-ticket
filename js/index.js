






const leftSeat = document.getElementById('leftSeat');

function handleClick(event) {

    // seat background color change
    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';


    // left seat 
    let avalableSeat = leftSeat.innerText - 1;
    leftSeat.innerText = avalableSeat;



}

