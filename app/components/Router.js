import URLAPI from '../helpers/wp_api.js';
import { ajax } from '../helpers/ajax.js';
import { PostCard } from './PostCard.js';
import { Error404 } from './404.js';
import { Post } from './Post.js';
import { SearchCard } from './SearchCard.js';

export async function Router() {
    let { hash } = location;
    let $main = document.getElementById('main');

    $main.innerHTML = '';

    if (!hash || hash === '#/') {
        await loadPosts($main);
    } else if (/^(#\/search\?search=)[a-zA-Z0-9]+$/.test(hash) || hash === '#/search') {
        await search($main);
    } else if (/^(#\/post\/)[0-9]+$/.test(hash)) {
        await loadPost($main, hash);
    } else {
        $main.innerHTML = Error404();
    }
    document.querySelector('.loader').style.display = 'none';
}

async function loadPosts($main) {
    await ajax({
        url: URLAPI.POSTS,
        cbSuccess: (posts) => {
          posts.forEach(post => {
            $main.innerHTML += PostCard(post);
          });
        }
    });
}

async function loadPost($main, hash) {
    let url = hash.split('/');
    let id = url[url.length - 1];

    await ajax({
        url: `${URLAPI.POST}/${id}`,
        cbSuccess: (post) => {
            $main.innerHTML = Post(post);
        }
    });
}

async function search($main) {
    const url = window.location.href.replace('#/', '');
    const urlParams = new URL(url);
    const criteria = urlParams.searchParams.get('search');

    if (criteria) {
        await ajax({
            url: `${URLAPI.SEARCH}${criteria}`,
            cbSuccess: (posts) => {
                //console.log(posts);
                if (posts && posts.length > 0) {
                    posts.forEach(post => $main.innerHTML += SearchCard(post));
                } else {
                    $main.innerHTML = 
                        `<div class="info">
                            <p>Info: No hay resultados para <mark>${criteria}</mark></p>
                        </div>`
                }
            }
        });
    } else {
        $main.innerHTML = 
            `<div class="info">
                <p>Info: Ingresa un criterio de búsqueda</p>
            </div>`
    }
}