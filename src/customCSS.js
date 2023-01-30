import { LitElement, css, html } from 'lit'

export class customCSS extends LitElement {
    static get properties() {
        return{

        }
    }
    constructor() {
        super();
    }

    render() {
        return html`
        <h1>Custom CSS example</h1>
        <div class="one">
            <div class="one-one child">1.1 child</div>
            <div class="one-two child">1.2 child </div>
            <div class="one-three child">1.3 child</div>
        </div>
        
        <div class="two">
            <div class="two-one child">1.1 child</div>
            <div class="two-two child">1.2 child </div>
            <div class="two-three child">1.3 child</div>
        </div>
        `
    }

    static get styles() {
        return css`
            // --background-color is undifined, dus roze
            h1{
                background-color: var(--background-color, pink )
            }
            .one{
                background-color: var(--div-background-color, white);
                color: var(--text-color, black);
            }
            .two{
                --div-background-color: blue;
            }

            .child{
                background-color: var(--div-background-color, white);
            }
            .one-one{
                padding: var(--div-padding, 0px);
            }
            
        `
    }
}

window.customElements.define('custom-css',customCSS);

