import { LitElement, css, html,  } from 'lit'

export class slots extends LitElement {
    static get properties() {
        return {

        }
    }
    constructor() {
        super();
    }

    


    render() {
        return html` 
        <p>Klilk op de knop</p>
        <button @click=${this._onClick} part="button">
            Show text

        </button>

        <template>
            <p>Hidden text</p>
           
        </template>
    `
        }

    
    _onClick(){
            console.log("Hello")
            var temp = document.getElementsByTagName("template")[0];
            console.log(temp);
            var clon = temp.content.cloneNode(true);
            console.log(clon)
            document.body.appendChild(clon);
    }

       
}

window.customElements.define('slots-example', slots);