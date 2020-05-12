// ELEMENTS TO VARIABLE DECLARATIONS

const mainMenu = document.querySelector('.main-menu-modal') ;
const playDeckModal = document.querySelector('.js-play-card-table-Modal') ;

const overlayMainMenu = document.querySelector('#overlay-main-menu') ;
const overlay = document.querySelector('#overlay') ;

const playBtn = document.querySelector('.js-option-play') ;


const P2CardRem = document.querySelector('.js-P2-card-rem') ;
const P1CardRem = document.querySelector('.js-P1-card-rem') ;

const P2RowScore1 = document.querySelector('.js-P2-play-row-score') ;
const P1RowScore1 = document.querySelector('.js-P1-play-row-score') ;

const P2RowScore2 = document.querySelector('.js-P2-play-row-2-score') ;
const P1RowScore2 = document.querySelector('.js-P1-play-row-2-score') ;

const playDeck = document.querySelector('.js-play-card-table') ;














// --------------------------------------------------
// GAME CODE
// --------------------------------------------------

// REUSABLE COMPONENTS

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  


//  __________ INITIALIZE 

init() ;


function init() {
    mainMenu.classList.add('active');
    overlayMainMenu.classList.add('active');
    P2CardRem.textContent = '0' ;
    P2RowScore1.textContent = '0' ;
    P2RowScore2.textContent = '0' ;
    P1CardRem.textContent = '0' ;
    P1RowScore1.textContent = '0' ;
    P1RowScore2.textContent = '0' ;
}


playBtn.addEventListener('click', () => {
    mainMenu.style.display = 'none' ;
    overlayMainMenu.classList.remove('active');
});

/*
document.querySelector( '.js-play-deck-card' ).addEventListener( 'click', () => {
    playDeckModal.classList.add('active');
    overlay.classList.add('active');
} ) ;
*/

//  __________ CARD GENERATION

// CARD TYPE-SCORES

const cardTypeScores = [ 
    pawnpt1_1 = getRandomIntInclusive(1, 3) ,
    pawnpt1_2 = getRandomIntInclusive(1, 3) ,
    pawnpt1_3 = getRandomIntInclusive(1, 3) ,

    heavypt1_1 = getRandomIntInclusive(1, 3) ,
    heavypt1_2 = getRandomIntInclusive(1, 3) ,
    heavypt1_3 = getRandomIntInclusive(1, 3) ,

    officerpt1_1 = getRandomIntInclusive(1, 3) ,
    officerpt1_2 = getRandomIntInclusive(1, 3) ,

    generalpt1_1 = getRandomIntInclusive(1, 3) ,

    lordpt1_1 = getRandomIntInclusive(1, 3) ,

    specialpt1_1 = getRandomIntInclusive(1, 3) ,

    factionpt1_1 = getRandomIntInclusive(1, 3) ,
] ;



// CARD COLLECTION


// __________ RANDOM CARD TYPE & STARTING DECK CREATION




// __________ CREATE RANDOM STARTING DECK with balanced card types
/*
function create10xCards() {
    playDeck.innerHTML = cardCollection[0] + cardCollection[1] + cardCollection[2] + cardCollection[3] + cardCollection[4] + cardCollection[5] + cardCollection[6] + cardCollection[7] + cardCollection[8] + cardCollection[9] ;
}

*/

// __________ POP-UP PLAYER'S DECK IN A MODAL for easy navigation