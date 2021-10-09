export function SearchForm() {
    const $form= document.createElement('form');
    const $input = document.createElement('input');
    $input.type = 'search';
    $input.name = 'search';
    $input.placeholder = 'buscar...';
    $form.classList.add('form-search');
    $form.appendChild($input);
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        if ($input.value.trim().length > 0) {
            location.hash = `#/search?search=${ $input.value }`;
        }
    });
    return $form;;
}