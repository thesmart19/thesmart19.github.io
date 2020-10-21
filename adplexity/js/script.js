(function () {
  function setHeight () {
    var timer = setTimeout(function () {
      clearTimeout(timer);
      document.querySelector('.header').style.height = document.documentElement.clientHeight + 'px';
      document.querySelector('.footer').style.height = document.documentElement.clientHeight + 'px';
    }, 100);
  }
  setHeight();
  window.addEventListener('resize',setHeight);
  window.addEventListener('orientationchange',setHeight);
})();
