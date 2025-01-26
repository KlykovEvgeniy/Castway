const refs = {
  hamburgerBtnRef: document.querySelector('.js-dropdown-button')
};

refs.hamburgerBtnRef.addEventListener('click', onDropdownMenuClick);

function onDropdownMenuClick() {
  document.body.classList.toggle('apper-hamburger');

  function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
      (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
      });
  }

  if (document.body.classList.contains('apper-hamburger')) {
    disableScroll();
  } else {
    enableScroll();
  }

  function enableScroll() {
    window.onscroll = function () {};
  }
}
