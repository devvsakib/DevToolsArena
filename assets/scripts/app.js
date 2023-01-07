// const searchInput = document.querySelector('input[type="search"]')

// searchInput.addEventListener('input', (event) => {
//     if (event.target.value.length > 0) {
//         let input, filter, ul, li, a, i, txtValue;
//         input = document.getElementById('myInput');
//         filter = input.value.toUpperCase();
//         ul = document.querySelector(".card");
//         li = document.querySelector(".card-title").textContent;
//         // li = ul.getElementsByTagName('li');

//         for (i = 0; i < li.length; i++) {
//             a = li[i].getElementsByTagName("a")[0];
//             txtValue = a.textContent || a.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 li[i].style.display = "";
//             } else {
//                 li[i].style.display = "none";
//             }
//         }



//     if (event.target.value.length === document.querySelector('.card-title').textContent) {
//         const searchQuery = event.target.value
//         console.log(searchQuery)
//     }
// } else {
//     if (event.target.value.length === 0) {
//         console.log('No search query')
//     }
// }
// })


let cards = document.querySelectorAll('.card')
let cardTitle = document.querySelectorAll('.card-title')
const searchInput = document.querySelector('input[type="search"]')
searchInput.addEventListener('input', (e) => {

    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].textContent.toLowerCase()
            .includes(e.target.value.toLowerCase())) {
                cards[i].classList.remove("is-hidden");
            } else {
            cards[i].classList.add("is-hidden");
        }
    }
})

//A little delay
// let typingTimer;
// let typeInterval = 300;
// let searchInput = document.getElementById('searchbox');

// searchInput.addEventListener('keyup', () => {
//     clearTimeout(typingTimer);
//     typingTimer = setTimeout(liveSearch, typeInterval);
// });