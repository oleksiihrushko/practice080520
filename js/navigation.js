import { navClickHandler } from './services.js';
const navigation = () => {
  const navigationList = document.querySelector('.nav');
  document.querySelector('.navLink a').classList.add('activeNavLink');

  navigationList.addEventListener('click', navClickHandler);
};

export default navigation;
