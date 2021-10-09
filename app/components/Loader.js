import URLREQS from '../helpers/wp_api.js';

export function Loader() {
    const $loader = document.createElement('img');
    $loader.src = '/app/assets/loader.svg';
    $loader.alt = 'cargando...';
    $loader.title = 'cargando...';
    $loader.classList.add('loader');

    return $loader;
}