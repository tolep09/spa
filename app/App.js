import { Header } from './components/Header.js';
import { Loader } from './components/Loader.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';
import { InfiniteScroll } from './helpers/infinite-scroll.js';
import URLAPI from './helpers/wp_api.js';

export function App () {
  const $root = document.getElementById('root');

  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());

  LoadContent();
}

export function LoadContent () {
  document.querySelector('.loader').style.display = 'block';
  URLAPI.npage = 1;
  
  Router();
  InfiniteScroll();
}
