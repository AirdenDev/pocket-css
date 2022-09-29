import { setStyle } from '../../core/utils/utils.js';


export class TransformElement extends HTMLElement {

    connectedCallback(){
        this.innerHTML =
            `${ setStyle('@import "app/features/transform/TransformElement.css";') }
<section className="explanation">
                <article className="explanation__block">
                    <p> La propiedad de CSS <b>transform</b> nos permite <b>modificar</b> o <b>distorsionar</b> la forma
                        o la
                        posición de un elemento en la página. Esto incluye:
                        <ul className="explanation__list">
                            <li className="list__item">
                                <p className="item__description"><b>Rotate</b> (rotar): Gira el elemento un número de
                                    grados alrededor de una axis</p>
                                <div className="item__square item__square-rotate"></div>
                                <small className="item__legend"> (Este cuadrado tiene una rotación de 30
                                    grados) </small>
                            </li>
                            <li className="list__item">
                                <p><b>Translate</b>(trasladar): Desplaza el elemento desde su posición original hasta lo
                                    establecido. </p>
                                <div className="item__square item__square-translate"></div>
                                <small className="item__legend"> (Este cuadrado se ha desplazado 40px a la derecha y
                                    20px hacia abajo) </small>
                            </li>
                            <li className="list__item">
                                <p><b>Scale</b> (escalar): Encoge o expande el elemento</p>
                                <div className="item__square item__square-scale"></div>
                                <small className="item__legend"> (Este cuadrado se ha encogido un 0.8) </small>
                            </li>
                            <li className="list__item">
                                <p><b>Skew</b>(Inclinar): Distorsiona la forma del elemento, deslizando su extremo
                                    superior en una dirección (izquierda, por ejemplo)
                                    y su extremo inferior en la dirección opuesta. </p>
                                <div className="item__square item__square-skew"></div>
                                <small className="item__legend"> (Este cuadrado tiene una inclinación de 15
                                    grados) </small>
                            </li>
                        </ul>
                    </p>
                </article>
            </section>   
            <section class="title">
                <h1 class="title__main"> Propiedad <span> transform </span></h1>
                <h2 class="title__sub"> Introducción </h2>
            </section>`
    }

    static get(){
        return '<app-transform></app-transform>'
    }
}


customElements.define("app-transform", TransformElement);
