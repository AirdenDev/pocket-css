import { setStyle } from '../../core/utils/utils';

export class NavbarElement extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = /*html*/
        `${ setStyle('@import "app/features/navbar/NavbarElement.css";') } 
        <nav class="nav">
            <ul class="nav__items"> List of CSS properties
                <li><a href="features/transform/transform.html"> Transform </a></li>            
            </ul>
            <ul class="nav__items"> Layouts
                <li> <a href="features/layouts/grid/grid.html"> Grid </a></li> 
            </ul>
        </nav>
        `;

    }

}

customElements.define("app-navbar", NavbarElement);