export function Post(props) {
    let { content, date, title } = props;
    date = new Date(date).toLocaleString();
    return `
        <section class="post-page">
            <aside>
                <h2>${title.rendered}</h2>
                <time datetime="${date}">${date}</time>
            </aside>
            <hr>
            <article>${content.rendered}</article>
        </section>
    `;
}