import {PATHS} from "./paths.js";

export class Router {

    routes = PATHS;

    navigate(path) {
        const $CONTAINER = document.querySelector("#content");
        const route = Object.keys(this.routes).find(path);
        console.log(route);
    }
     transformPage() {
        $CONTAINER.innerHTML = PATHS.transform.template;
        window.history.pushState({}, "done", PATHS.transform.path);
    }
}

window.router = new Router();