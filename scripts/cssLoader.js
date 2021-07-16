const cssLoader = (() => {
  let headEl = document.getElementsByTagName('head')[0];
  const load = (path) => {
    //Remove the currently loaded stylesheet if there is one
    if (headEl.querySelector('.loaded-css')) {
      headEl.removeChild(headeEl.querySelector('.loaded-css'));
    }
    //Create a new link element with the specified path
    let linkEl = document.createElement('link');
    linkEl.classList.add('loaded-css');
    linkEl.setAttribute('type', 'text/css');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', path);
    //Append the link element to the head of index.html
    headEl.appendChild(linkEl);
  };
  return { load };
})();

export { cssLoader };
