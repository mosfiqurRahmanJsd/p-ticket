

const allClickableSeat = document.getElementsByClassName('clickable-btn');
const seletedSeatElement = document.getElementById('seletedSeat');
const leftSeatElement = document.getElementById('leftSeat');
const addedSeatElement = document.getElementById('seat');



for (const clickableSeat of allClickableSeat) {
    var seatCollection = [];
    clickableSeat.addEventListener('click', function (event) {
        const seatNumber = event.target.innerText;
        const seatClass = 'Economoy';
        const seatPrice = 550;

        if (seatCollection.includes(seatNumber)) {
            alert('Seat Adready Aded!')
        } else {
            event.target.style.backgroundColor = '#1DD100';
            event.target.style.color = 'white';
            const tr = document.createElement('tr');
            tr.classList.add('border-none')
            tr.innerHTML = `
                <td class="seat-number">${seatNumber}</td>
                <td>${seatClass}</td>
                <td class="ps-14">${seatPrice}</td>
            `
            seletedSeatElement.appendChild(tr);
            seatCollection.push(seatNumber);


            // availabe seat 
            const avalableSeat = getElementValueById('leftSeat');
            leftSeatElement.innerText = avalableSeat - 1;


            // add seat 
            const addedSeat = getElementValueById('seat');
            addedSeatElement.innerText = addedSeat + 1;


        }


    })
}




function getElementValueById(elementId) {
    const elementValue = document.getElementById(elementId).innerText;
    const numberValue = parseInt(elementValue);
    return numberValue;
}






