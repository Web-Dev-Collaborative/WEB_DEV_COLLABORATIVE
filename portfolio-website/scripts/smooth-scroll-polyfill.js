// From https://embed.plnkr.co/plunk/29jeYo

document.addEventListener('DOMContentLoaded', (event) => {

  const navlinks = document.querySelectorAll('.navlink');

  navlinks.forEach(item => {
    item.addEventListener('click', (e) => {
      const [url, label] = e.currentTarget.href.split('#');
      smoothScroll(label);
    });
  });

  // detect scroll-behavior
  const body = document.querySelector('body');
  const scrollBehavior = getComputedStyle(body).scrollBehavior;

  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function smoothScroll(id) {
    // for Chrome and Firefox use CSS, scroll-behavior: smooth;
    if (scrollBehavior) return;
    // for IE and Safari use JS for smooth scroll
    var startY = currentYPosition();
    var stopY = elmYPosition(id);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i=startY; i<stopY; i+=step) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for (var i=startY; i>stopY; i-=step) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
  }

  function elmYPosition(id) {
    var el = document.getElementById(id);
    var y = el.offsetTop;
    var node = el;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }

});