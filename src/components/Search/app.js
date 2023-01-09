let cards = document.querySelectorAll('.card')
let cardTitle = document.querySelectorAll('.card-title')

function searchMe() {

    const searchInput = document.querySelector('input[type="search"]').value
    searchInput.addEventListener('input', (e) => {
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].textContent.toLowerCase()
                .includes(e.target.value.toLowerCase())) {
                cards[i].classList.remove("is-hidden");
            } else {
                cards[i].classList.add("is-hidden");
            }
        }
    })
}
setTimeout(searchMe, 400)