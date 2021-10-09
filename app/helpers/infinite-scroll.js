import { PostCard } from '../components/PostCard.js';
import { SearchCard } from '../components/SearchCard.js';
import { ajax } from './ajax.js';
import URLAPI from './wp_api.js';

export async function InfiniteScroll() {
    addEventListener('scroll', async(e) => {
        let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        
        if ((scrollTop + clientHeight) >= scrollHeight) {
            document.querySelector('.loader').style.display = 'block';
            let { hash } = location;
            let endPoint = null;
            let Component = null;
            URLAPI.npage++;

            if (!hash || hash === '#/') { //posts
                endPoint = `${URLAPI.POSTS}&page=${URLAPI.npage}`;
                Component = PostCard;
    
            } else if (/^(#\/search\?search=)[a-zA-Z0-9]+$/.test(hash)) { //search
                const url = window.location.href.replace('#/', '');
                const urlParams = new URL(url);
                const criteria = urlParams.searchParams.get('search');
                endPoint = `${URLAPI.SEARCH}${criteria}&page=${URLAPI.npage}`;
                Component = SearchCard;
            } else {
                document.querySelector('.loader').style.display = 'block';
                return false;
            }

            await ajax({
                url: endPoint,
                cbSuccess: (posts) => {
                    document.querySelector('.loader').style.display = 'none';
                    posts.forEach(post => {
                       document.getElementById('main').innerHTML += Component(post);
                    });
                }
            });
        }
    });
}