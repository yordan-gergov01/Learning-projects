import { html, render } from '../node_modules/lit-html/lit-html.js';

const loadBtn = document.getElementById('btnLoadTowns');
loadBtn.addEventListener('click', getTowns);

const listTemplate = (data) => html`
<ul>
    ${data.map(town => html`<li>${town}</li>`)}
</ul>
`

function getTowns(e) {
    e.preventDefault();

    if (document.getElementById('towns').value !== '') {
        const root = document.getElementById('root');
        const towns = document.getElementById('towns').value.split(', ');

        const ul = document.createElement('ul');

        const result = listTemplate(towns);

        render(result, root);
        document.getElementById('towns').value = '';
    }


}
