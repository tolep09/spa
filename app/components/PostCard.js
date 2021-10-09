export function PostCard(props) {
    let {date, id, _embedded, slug, title} = props;
    let dateFormated = new Date(date).toLocaleString();
    let urlPoster = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url :
     'app/assets/favicon.ico';
    return `
        <article class="post-card">
            <img src="${urlPoster}" alt="${title.rendered}" title="${title.rendered}">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${dateFormated}">${dateFormated}</time>
                <a href="#/post/${id}">Ver</a>
            </p>
        </article>   
    
    `;
}

//<a href="#/${slug}">Ver</a>