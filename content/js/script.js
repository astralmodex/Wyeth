// ELEMENTS TO VARIABLE DECLARATIONS

const mainMenu = document.querySelector('.main-menu-modal') ;
const playDeckModal = document.querySelector('.play-card-table-Modal') ;

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

const P1PlayDeck = document.querySelector('.P1-play-deck') ;

const playDeckCard = document.querySelector('.js-play-deck-card') ;














// --------------------------------------------------
// GAME CODE
// --------------------------------------------------

// REUSABLE COMPONENTS

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  overlay.addEventListener( 'click', () => {
    overlay.classList.remove('active')
    playDeckModal.classList.remove( 'active' )
  } )
  


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
    mainMenu.style.display = 'none' 
    overlayMainMenu.classList.remove('active')
    create10xCards()
});



//  __________ CARD GENERATION

// DECLARE CARD TYPES & THEIR SCORES

 const cardTypeScoresSet = {
    pawnCard_1: getRandomIntInclusive(1,3) ,
    pawnCard_2: getRandomIntInclusive(1,3) ,
    pawnCard_3: getRandomIntInclusive(1,3) ,

    heavyCard_1: getRandomIntInclusive(4,6) ,
    heavyCard_2: getRandomIntInclusive(4,6) ,
    heavyCard_3: getRandomIntInclusive(4,6) ,

    officerCard_1: getRandomIntInclusive(7,10) ,
    officerCard_2: getRandomIntInclusive(7,10) ,
    officerCard_3: getRandomIntInclusive(7,10) ,
    officerCard_4: getRandomIntInclusive(7,10) ,

    generalCard_1: getRandomIntInclusive(11,14) ,
    generalCard_2: getRandomIntInclusive(11,14) ,
    generalCard_3: getRandomIntInclusive(11,14) ,
    generalCard_4: getRandomIntInclusive(11,14) ,

    lordCard_1: 15 ,
/*
    specialpt_11 = undefined ,

    factionpt_12 = undefined,*/
  } ;



// CARD COLLECTION

var cardCreate = {
    cardPawn_1: '<div class=\"play-card js-play-deck-card\" draggable=\"true\"' + '<img src=\"content/img/cards/' + cardTypeScoresSet['pawnCard_1'] + 'pt-card.png\">'  + '</div>' ,
    cardPawn_2: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['pawnCard_2'] + 'pt-card.png\">'  + '</div>' ,
    cardPawn_3: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['pawnCard_3'] + 'pt-card.png\">'  + '</div>' ,

    cardHeavy_1: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['heavyCard_1'] + 'pt-card.png\">'  + '</div>' ,
    cardHeavy_2: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['heavyCard_2'] + 'pt-card.png\">'  + '</div>' ,
    cardHeavy_3: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['heavyCard_3'] + 'pt-card.png\">'  + '</div>' ,

    cardOfficer_1: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['officerCard_1'] + 'pt-card.png\">'  + '</div>' ,
    cardOfficer_2: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['officerCard_2'] + 'pt-card.png\">'  + '</div>' ,

    cardGeneral_1: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['generalCard_1'] + 'pt-card.png\">'  + '</div>' ,

    cardLord_1: '<div class=\"play-card js-play-deck-card\" draggable=\"true\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['lordCard_1'] + 'pt-card.png\">'  + '</div>' ,
/* NOT YET
    cardSpecial_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['specialCard_1'] + 'pt-card.png\">'  + '</div>' ,

    cardFaction_1: '<div class=\"play-card js-play-deck-card\">' + '<img src=\"content/img/cards/' + cardTypeScoresSet['faction_1'] + 'pt-card.png\">'  + '</div>'*/
}

// __________ RANDOM CARD TYPE & STARTING DECK CREATION




// __________ CREATE RANDOM STARTING DECK with balanced card types

function create10xCards() {
    playDeck.innerHTML = cardCreate.cardPawn_1 + cardCreate.cardPawn_2 + cardCreate.cardPawn_3 + cardCreate.cardHeavy_1 + cardCreate.cardHeavy_2 + cardCreate.cardHeavy_3 + cardCreate.cardOfficer_1 + cardCreate.cardOfficer_2 + cardCreate.cardGeneral_1 + cardCreate.cardLord_1 ;

    playDeckModal.innerHTML = cardCreate.cardPawn_1 + cardCreate.cardPawn_2 + cardCreate.cardPawn_3 + cardCreate.cardHeavy_1 + cardCreate.cardHeavy_2 + cardCreate.cardHeavy_3 + cardCreate.cardOfficer_1 + cardCreate.cardOfficer_2 + cardCreate.cardGeneral_1 + cardCreate.cardLord_1 ;
}



// --------------------------------------------------
// DOM MANIPULATION
// --------------------------------------------------

// __________ POP-UP PLAYER'S DECK IN A MODAL for easy navigation

document.querySelector( '.P1-play-deck-ghost' ).addEventListener( 'click', () => {
    playDeckModal.classList.add( 'active' )
    overlay.classList.add('active')
} ) ;



// __________ ENABLE DRAGGING CARDS for placing on ROWS

function getImages(contentId) {
    var content = document.getElementById(contentId);
    // only one image, just return an item; or you can return an array
    if (content) return document.getElementsByTagName('img')[0];

const rowsfPlaceCards = document.querySelectorAll( '.card-table-P1' )
console.log( draggableCards )

draggableCards.forEach(draggable => {
    draggable.addEventListener( 'dragstart', () )
} )


// __________ PLACE the DRAGGED CARDS ON ROWS

/**/



// __________ INSERT DROPPED CARD VALUES/POINTS into ROWSCORE