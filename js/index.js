const allClickableSeat = document.getElementsByClassName('clickable-btn');
const seletedSeatElement = document.getElementById('seletedSeat');
const leftSeatElement = document.getElementById('leftSeat');
const addedSeatElement = document.getElementById('seat');
const phoneInput = document.getElementById('phone');
const nextBtn = document.getElementById('next-btn');




// navigate to ticket section smooth scrool
function navigatSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}


// next button enable
let totalSeat = 0;
function nextBtnEnable() {
    const selectedSeat = totalSeat > 0;
    const validPhone = phoneInput.value.trim() !== '';
    nextBtn.classList.toggle(
        "btn-disabled",
        !(selectedSeat && validPhone)
    );

    if (nextBtn.classList.contains("btn-disabled")) {
        nextBtn.style.backgroundColor = '#F7F8F8';
        nextBtn.style.color = '#7D8085';
    } else {
        nextBtn.style.backgroundColor = '#1DD100';
        nextBtn.style.color = 'white';
    }
}


for (const clickableSeat of allClickableSeat) {
    var seatCollection = [];
    clickableSeat.addEventListener('click', function (event) {
        const seatNumber = event.target.innerText;
        const seatClass = 'Economoy';
        const seatPrice = 550;

        if (seatCollection.includes(seatNumber)) {
            alert('Seat Adready Aded!')
        } else {

            // availabe seat count
            const avalableSeat = getElementValueById('leftSeat');
            leftSeatElement.innerText = avalableSeat - 1;


            // add seat count
            const addedSeat = getElementValueById('seat');
            addedSeatElement.innerText = addedSeat + 1;

            // seat background color and text color
            event.target.style.backgroundColor = '#1DD100';
            event.target.style.color = 'white';

            // added new seat
            const tr = document.createElement('tr');
            tr.classList.add('border-none')
            tr.innerHTML = `
                <td class="seat-number">${seatNumber}</td>
                <td>${seatClass}</td>
                <td class="price ps-14">${seatPrice}</td>
            `
            seletedSeatElement.appendChild(tr);
            seatCollection.push(seatNumber);

            totalSeat = seatCollection.length;

            updateTotalPrice(seatPrice);
            updateGrandTotal(seatPrice);

            nextBtnEnable();

        }

    })
}


phoneInput.addEventListener('input', nextBtnEnable);





function updateTotalPrice(value) {
    const totalPrice = getElementValueById('total-price');
    document.getElementById('total-price').innerText = totalPrice + value;
}

function updateGrandTotal(value) {
    const grandTotalPrice = getElementValueById('grand-total');
    document.getElementById('grand-total').innerText = grandTotalPrice + value;
}





function getElementValueById(elementId) {
    const elementValue = document.getElementById(elementId).innerText;
    const numberValue = parseInt(elementValue);
    return numberValue;
}