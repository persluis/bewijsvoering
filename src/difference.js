import { LitElement, css, html } from 'lit'

export class difference extends LitElement {
    static get properties() {
        return{
        }
    }
    constructor() {
        super();
        const foo = bar;
    }


    render(){
        return html`
            <h1> difference </h1>
            
        `;
    }

}

window.customElements.define('difference-show',difference)