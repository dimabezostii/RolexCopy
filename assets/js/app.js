
// PANE IMAGES CAN'T BE SELECTED - START --------------------------------------------------------------------------------------------------------------
const paneWatchImages = document.querySelectorAll('div.watch-box>div>img');

paneWatchImages.forEach(image => {
    image.setAttribute('draggable', false);
});
// PANE IMAGES CAN'T BE SELECTED - END



// PANE SCROLLBAR POSITION - START ---------------------------------------------------------------------------------------------------------------------
const scrollWatchContainer = document.querySelector('.scroll-watch-container');
const watchContainer = document.querySelector('.watch-container');
watchContainer.style.height = parseInt(scrollWatchContainer.offsetHeight + 5) + 'px';

window.addEventListener('resize', () => {
    watchContainer.style.height = parseInt(scrollWatchContainer.offsetHeight + 5) + 'px';
});
// PANE SCROLLBAR POSITION - END









// HTML, BODY VARIABLES
const body = document.querySelector('body');

// PANE TOGGLE START -----------------------------------------------------------------------------------------------------------------------------------
const menuBtn = document.querySelector('#menu');
const pane = document.querySelector('#pane');
const closePane = document.querySelector('.top>i');
const header = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    pane.classList.add('active');
    overlay.classList.add('active');
    header.classList.add('hide');
    body.classList.add('blockScroll');
});

closePane.addEventListener('click', () => {
    pane.classList.remove('active');
    overlay.classList.remove('active');
    header.classList.remove('hide');
    body.classList.remove('blockScroll');
});
// PANE TOGGLE END

// RECHERCHE PANE TOGGLE START ------------------------------------------------------------------------------------------------------------------------
const recherche = document.querySelector('#recherche');
const searchPane = document.querySelector('.search-pane');
const closeRecherche = document.querySelector('.search-pane-close');

recherche.addEventListener('click', () => {
    overlay.classList.add('active');
    searchPane.classList.add('show');
    header.classList.add('hide');
    body.classList.add('blockScroll');
});

closeRecherche.addEventListener('click', () => {
    overlay.classList.remove('active');
    searchPane.classList.remove('show');
    header.classList.remove('hide');
    body.classList.remove('blockScroll');
});
// RECHERCHE PANE TOGGLE END


// SELECTION PANE TOGGLE START ------------------------------------------------------------------------------------------------------------------------
const selectionLink = document.querySelector('#selectionLink');
const selectionPane = document.querySelector('.selection-pane');
const closeSelection = document.querySelector('.selection-pane-close-btn');

selectionLink.addEventListener('click', () => {
    overlay.classList.add('active');
    selectionPane.classList.add('show');
    header.classList.add('hide');
    body.classList.add('blockScroll');
});

closeSelection.addEventListener('click', () => {
    overlay.classList.remove('active');
    selectionPane.classList.remove('show');
    header.classList.remove('hide');
    body.classList.remove('blockScroll');
});
// SELECTION PANE TOGGLE END


// OVERLAY VARIABLE
const overlay = document.querySelector('.pane-overlay');
overlay.addEventListener('click', () => {
    pane.classList.remove('active');
    overlay.classList.remove('active');
    header.classList.remove('hide');
    searchPane.classList.remove('show');
    body.classList.remove('blockScroll');
});
