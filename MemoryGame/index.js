// let cardsArray = [
//     {
//         'name': 'CSS',
//         'img': 'http://thapatechnical.online/logos/css.png',
//     },
//     {
//         'name': 'HTML',
//         'img': 'http://thapatechnical.online/logos/html5.png',
//     },
//     {
//         'name': 'jQuery',
//         'img': 'http://thapatechnical.online/logos/jquery.png',
//     },
//     {
//         'name': 'JS',
//         'img': 'http://thapatechnical.online/logos/js.png',
//     },
//     {
//         'name': 'Node',
//         'img': 'http://thapatechnical.online/logos/nodejs.png',
//     },
//     {
//         'name': 'Python',
//         'img': 'http://thapatechnical.online/logos/python.png',
//     }
// ];

// const gameCard = cardsArray.concat(cardsArray);




// // const parentDiv = document.querySelector("#card-section");
// // const n = cardsArray.length;
// // for(let i=0; i<2*cardsArray.length; i++){
// //     const childDiv = document.createElement('div');
// //     childDiv.classList.add('card');
// //     childDiv.dataset.name=cardsArray[i%n].name;
// //     childDiv.style.backgroundImage = `url(${cardsArray[i%n].img})`;
// //     parentDiv.appendChild(childDiv);
// // }
// // for(let i=0; i<cardsArray.length; i++){
// //     const childDiv = document.createElement('div');
// //     childDiv.classList.add('card');
// //     childDiv.dataset.name=cardsArray[i].name;
// //     childDiv.style.backgroundImage = `url(${cardsArray[i].img})`;
// //     parentDiv.appendChild(childDiv);
// // }
// // const shuffledChild = myNumbers(gameCard)
// let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());
// const parentDiv = document.querySelector("#card-section");



// let clickCount=0;
// let firstCard="";
// let secondCard="";

// // styling the match card
// const card_matches = () => {
//     let card_selected = document.querySelectorAll('.card_selected');

//     card_selected.forEach((curElem) => {
//         curElem.classList.add('card_match')
//     })
// }
// const resetGame=()=>{
//     clickCount=0;
//     firstCard="";
//     secondCard="";
//     let card_selected = document.querySelectorAll('.card_selected');
//     card_selected.forEach((curElem) => {
//         curElem.classList.remove('card_selected');
//     })
// }

// parentDiv.addEventListener('click',(event)=>{
//     let curCard = event.target;
//     clickCount++;
//     if(clickCount<=2){
//         if(clickCount===1){
//             firstCard = curCard.parentNode.dataset.name;
//             curCard.parentNode.classList.add('card_selected');
//         }
//         else{
//             secondCard = curCard.parentNode.dataset.name;
//             curCard.parentNode.classList.add('card_selected');
//         }
//     if(firstCard !=="" && secondCard !==""){
//         if(firstCard === secondCard){
//             // curCard.classList.add('card_match');
//             setTimeout(()=>{
//                 card_matches();
//                 resetGame();
//             },1000)
//         }
//         else{
//             setTimeout(()=>{
//                 resetGame();
//             })
//         }
//     }
//     }
//     if(curCard.id === "card-section"){
//         return false;
//         curCard.classList.add('');
//     }
    
// })

// const n = gameCard.length;
// for(let i=0; i<n; i++){
//     const childDiv = document.createElement('div');
//     childDiv.classList.add('card');
//     childDiv.dataset.name=shuffledChild[i].name;
//     // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;
//     parentDiv.appendChild(childDiv);

//     const front_div = document.createElement('div')
//     front_div.classList.add('front-card');

//     const back_div = document.createElement('div')
//     back_div.classList.add('front-card');

//     back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

//     childDiv.appendChild(front_div);
//     childDiv.appendChild(back_div);
// }

let cardsArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];


const parentDiv = document.querySelector('#card-section');

// step 2 to duplicate each card
const gameCard = cardsArray.concat(cardsArray)
console.log(gameCard)

// steps 3
// Note that this method creates a new shuffled array instead of modifying the original one.
// const myNumbers = (array) => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1))
//         // console.log(i, j)
//         let temp = array[i]
//         array[i] = array[j]
//         array[j] = temp
//     }
//     return array
// }
//
// const shuffledChild = myNumbers(gameCard)
let shuffledChild = Array.from(gameCard).sort(() => 0.5 - Math.random());


let clickCount = 0;
let firstCard = "";
let secondCard = "";


// styling the match card
const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.add('card_match')
    })
}


// step 7

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

// step 4
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if(curCard.id === "card-section"){return false }

    clickCount ++;

    if(clickCount < 3){

        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // curCard.classList.add('card_match')
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            }else{
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})


// step 1 to add the card
for(let i=0; i<shuffledChild.length; i++){

    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffledChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}
