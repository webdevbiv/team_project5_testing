import refs from './refs.js';

const { headerLogo, headerLogoIcon, headerHome, headerMyLibrary, headerWatchedBtn,
    headerQueuedBtn, headerFormInput, headerFormSubmitBtn, headerError,
    headerSection, headerForm, headerLnWrapper, headerNavMyLibrary } = refs;

// ----- logo -----
headerLogo.addEventListener('click', homePage)
headerHome.addEventListener('click', homePage)
// ----- navigation menu -----
headerMyLibrary.addEventListener('click', myLibrary)
// ----- shearch input -----
headerFormSubmitBtn.addEventListener('click', error)
// ----- navigation user -----
headerWatchedBtn.addEventListener('click', watchedBtn)
headerWatchedBtn.addEventListener('mouseover', defaultBtn)
headerQueuedBtn.addEventListener('click', queuedBtn)
headerQueuedBtn.addEventListener('mouseover', defaultBtn)
headerQueuedBtn.addEventListener('mouseout', removeDefaultBtn)



function homePage(e) {
    e.preventDefault();
    headerSection.classList.remove('header--my-library');
    headerForm.classList.remove('hidden')
    headerLnWrapper.classList.remove('ln-wrapper--my-library')
    headerNavMyLibrary.classList.add('hidden')
    headerFormInput.classList.remove('hidden')
    headerHome.classList.add('nav__link--selected')
    headerMyLibrary.classList.remove('nav__link--selected')
    headerQueuedBtn.classList.remove('btn--selected')
    headerError.classList.add('hidden', 'none')
}

function myLibrary(e) {
    e.preventDefault();
    headerSection.classList.add('header--my-library');
    headerForm.classList.add('hidden')
    headerLnWrapper.classList.add('ln-wrapper--my-library')
    headerNavMyLibrary.classList.remove('hidden')
    headerFormInput.classList.add('hidden')
    headerHome.classList.remove('nav__link--selected')
    headerMyLibrary.classList.add('nav__link--selected')
    headerWatchedBtn.classList.add('btn--selected')
    headerQueuedBtn.classList.remove('btn--selected')
    headerError.classList.add('hidden', 'none')
}

function watchedBtn(e) {
    e.preventDefault();
    headerWatchedBtn.classList.add('btn--selected')
    headerQueuedBtn.classList.remove('btn--selected')
}

function queuedBtn(e) {
    e.preventDefault();
    headerWatchedBtn.classList.remove('btn--selected')
    headerQueuedBtn.classList.add('btn--selected')
}

function error(e) {
    e.preventDefault();
    if (headerError.classList.contains('hidden')) {
        headerError.classList.remove('hidden', 'none')
    } else {
        headerError.classList.add('hidden', 'none')
    }
}

function defaultBtn(e) {
    if (e.target.classList.contains('header-queue-btn-js')) {
        headerWatchedBtn.classList.add('btn--default');
    }
    if (e.taget.classList.conrains('header-watched-btn-js')) {
        headerQueuedBtn.classList.add('btn--default');
    }
}

function removeDefaultBtn() {
    headerWatchedBtn.classList.remove('btn--default');
    headerQueuedBtn.classList.remove('btn--default');
}