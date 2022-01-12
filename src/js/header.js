import refs from './refs.js';

const { headerLogo, headerLogoIcon, headerHome, headerMyLibrary, headerWatchedBtn,
    headerQueuedBtn, headerFormInput, headerFormSubmitBtn, headerError,
    headerSection, headerForm, headerLnWrapper, headerNavMyLibrary } = refs;

headerLogo.addEventListener('click', homePage)
headerHome.addEventListener('click', homePage)
headerMyLibrary.addEventListener('click', myLibrary)
headerWatchedBtn.addEventListener('click', watchedBtn)
headerQueuedBtn.addEventListener('click', queuedBtn)
headerFormSubmitBtn.addEventListener('click', error)


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
    headerError.classList.add('hidden')
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
    headerError.classList.add('hidden')
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
        headerError.classList.remove('hidden')
    } else {
        headerError.classList.add('hidden')
    }
}
