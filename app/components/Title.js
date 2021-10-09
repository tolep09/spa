import URLRAPI from '../helpers/wp_api.js';

export function Title() {
    const $h1 = document.createElement('h1');
    $h1.innerHTML = `
        <a href="${URLRAPI.DOMAIN}" target="_blank" rel="noopener">
            ${URLRAPI.NAME.toUpperCase()}
        </a>`;

    return $h1;
}