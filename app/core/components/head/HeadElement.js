class HeadElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = /*html*/
        `<div>
            <h1> Welcome to Pocket CSS</h1>
        </div>`
    }
}

customElements.define("app-head", HeadElement);