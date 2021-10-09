export function Menu() {
    const $menu = document.createElement('nav');
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span>-</span>
        <a href="#/search">Buscar</a>
    `;
    return $menu;
}