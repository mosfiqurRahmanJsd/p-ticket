






const leftSeatElement = document.getElementById('leftSeat');
const addedSeatElement = document.getElementById('seat');
const seletedSeatElement = document.getElementById('seletedSeat');

function handleClick(event) {

    // seat background color change
    event.target.style.backgroundColor = '#1DD100';
    event.target.style.color = 'white';


    // left seat 
    const avalableSeat = leftSeatElement.innerText - 1;
    leftSeatElement.innerText = avalableSeat;


    // added seat 
    const addSeat = addedSeatElement.innerText;
    const addedSeatCount = parseFloat(addSeat);
    addedSeatElement.innerText = addedSeatCount + 1;





    const tr = document.createElement('tr');
    tr.classList.add('border-none')
    tr.innerHTML = `
        <td>${event.target.innerText}</td>
        <td>Economoy</td>
        <td>550</td>
    `

    seletedSeatElement.appendChild(tr);





}

