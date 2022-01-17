
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