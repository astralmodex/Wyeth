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
    create10xCards() ;
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
    pawnpt_1 = 1 ,
    pawnpt_2 = 2 ,
    pawnpt_3 = 3 ,

    heavypt_4 = 4 ,
    heavypt_5 = 5 ,
    heavypt_6 = 6 ,

    officerpt_7 = 7 ,
    officerpt_8 = 8 ,
    officerpt_9 = 9 ,
    officerpt_10 = 10 ,

    generalpt_9 = 11 ,
    generalpt_9 = 12 ,
    generalpt_9 = 13 ,
    generalpt_9 = 14 ,

    lordpt_10 = 15 ,
/*
    specialpt_11 = undefined ,

    factionpt_12 = undefined,*/
 ] ;



// CARD COLLECTION

var cardCreate = {
    cardPawn_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(0,2)] + 'pt-card.png\">'  + '</div>' ,
    cardPawn_2: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(0,2)] + 'pt-card.png\">'  + '</div>' ,
    cardPawn_3: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(0,2)] + 'pt-card.png\">'  + '</div>' ,

    
    cardHeavy_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(3,5)] + 'pt-card.png\">'  + '</div>' ,
    cardHeavy_2: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(3,5)] + 'pt-card.png\">'  + '</div>' ,
    cardHeavy_3: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(3,5)] + 'pt-card.png\">'  + '</div>' ,

    
    cardOfficer_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(6,9)] + 'pt-card.png\">'  + '</div>' ,
    cardOfficer_2: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(6,9)] + 'pt-card.png\">'  + '</div>' ,
    
    cardGeneral_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(10,13)] + 'pt-card.png\">'  + '</div>' ,
    
    cardLord_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[14] + 'pt-card.png\">'  + '</div>' ,
    /*
    cardSpecial_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(0,2)] + 'pt-card.png\">'  + '</div>' ,
    
    cardFaction_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScores[getRandomIntInclusive(0,2)] + 'pt-card.png\">'  + '</div>' ,  */
}

// __________ RANDOM CARD TYPE & STARTING DECK CREATION




// __________ CREATE RANDOM STARTING DECK with balanced card types

function create10xCards() {
    playDeck.innerHTML = cardCreate.cardPawn_1 + cardCreate.cardPawn_2 + cardCreate.cardPawn_3 + cardCreate.cardHeavy_1 + cardCreate.cardHeavy_2 + cardCreate.cardHeavy_3 + cardCreate.cardOfficer_1 + cardCreate.cardOfficer_2 + cardCreate.cardGeneral_1 + cardCreate.cardLord_1 ;
}



// __________ POP-UP PLAYER'S DECK IN A MODAL for easy navigation