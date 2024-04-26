






const leftSeat = document.getElementById('leftSeat');
const addedSeat = document.getElementById('seat');

function handleClick(event) {

    // seat background color change
    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';


    // left seat 
    const avalableSeat = leftSeat.innerText - 1;
    leftSeat.innerText = avalableSeat;


    // added seat 
    const addSeat = addedSeat.innerText;
    const addedSeatCount = parseFloat(addSeat);
    addedSeat.innerText = addedSeatCount + 1;



}

