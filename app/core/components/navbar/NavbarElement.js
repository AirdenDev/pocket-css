import { setStyle } from '../../utils/utils.js';

export class NavbarElement extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML =
        `${ setStyle('@import "app/core/components/navbar/NavbarElement.css";') } 
        <nav class="nav">
            <ul class="nav__items"> List of CSS properties
                <li onclick="router.transformPage()">Transform </li>            
            </ul>
            <ul class="nav__items"> Layouts
                <li> <a href="features/layouts/grid/flexbox.html"> Flexbox </a></li> 
                <li> <a href="features/layouts/grid/grid.html"> Grid </a></li> 
            </ul>
        </nav>
        `;

    }

}

customElements.define("app-navbar", NavbarElement);