export function SearchCard(props) {
    let { id, title } = props;

    return `
        <article class="post-card">
            <h2>${title}</h2>
            <p>
                <a href="#/post/${id}">Ver</a>
            </p>
        </article>
    `;
}