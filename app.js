const map = document.querySelector('svg');
const tip = document.querySelector('.tooltip');

const reset = () => tip.classList.remove('active');

function search(nation) {
  const link = document.createElement('a');
  link.href = `https://en.wikipedia.org/wiki/${nation}`;
  link.target = '_blank';
  link.click();
  link.remove();
}

function tooltip(e,nation) {
  tip.textContent = nation;
  tip.style.setProperty('--x',`${e.x - 20}px`);
  tip.style.setProperty('--y',`${e.y - 35}px`);
  tip.classList.add('active');
}

function activate(e) {
  if (!e.target.matches('svg path')) return reset();
  const nation = e.target.getAttribute('class') ?? e.target.getAttribute('name');
  e.target.addEventListener('click',() => search(nation),false);
  tooltip(e,nation);
}

map.addEventListener('pointermove',activate,false);

