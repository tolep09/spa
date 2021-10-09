export async function ajax(props) {
    let { url, cbSuccess } = props;

    await fetch(url)
    .then(resp => resp.ok ? resp.json() : Promise.reject(resp))
    .then(resp => cbSuccess(resp))
    .catch(reason => {
        let msg = reason.statusText || 'Ha ocurrido un error';
        document.querySelector('#main').innerHTML = `
            <div class="error">
                <p>Error: ${reason.status}: ${msg}</p>
            </div>
        
        `;
        document.querySelector('.loader').style.display = 'none';
        console.log(reason);
    });
}