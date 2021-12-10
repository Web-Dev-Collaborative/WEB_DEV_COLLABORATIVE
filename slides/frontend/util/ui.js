export const requestFullScreen = () => {
  const el = document.documentElement;
  const rfs = // for newer Webkit and Firefox
      el.requestFullScreen
      || el.webkitRequestFullScreen
      || el.mozRequestFullScreen
      || el.msRequestFullScreen;
  if (typeof rfs !== "undefined" && rfs) {
    rfs.call(el);
  }
};
