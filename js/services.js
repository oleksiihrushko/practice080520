export const navClickHandler = e => {
  if (e.target === e.currentTarget) return;
  const currItem = document.querySelector('.activeNavLink');
  if (currItem) {
    currItem.classList.remove('activeNavLink');
  }
  e.target.classList.add('activeNavLink');
};
