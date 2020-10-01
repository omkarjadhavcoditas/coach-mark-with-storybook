import { html } from 'lit-html';
// import '@orxe-components/coach-mark';
import '../assignment2-orxe/packages/coach-mark/dist/index';

export const Coach = ({ title, description }) => {
    return html`
        <orxe-coach-mark title="${title}" description="${description}"></<orxe-coach-mark>
    `;
}