import { createElement } from "../utils/element.js";

export default class Loading {

    /**
     * Show loading inner element
     * @param {HTMLElement} element 
     */
    show(element) {
        this.element = element;
        this.display = element.style.display;
        element.style.visibility = "hidden";
        element.style.display = "none";

        this.loadingElement = createElement(Loading.HTML);
        element.parentElement.insertBefore(this.loadingElement, this.element);
    }

    /**
     * Close loading
     */
    close() {
        this.loadingElement.remove();
        this.element.style.visibility = "visible";
        this.element.style.display = this.display;

        this.element = null;
        this.display = null;
        this.loadingElement = null;
    }

    /**
     * Create loading object and insert on element
     * @param {HTMLElement} element 
     * @returns {Loading}
     */
    static showLoading(element) {
        let loading = new Loading();
        loading.show(element);
        return loading;
    }
}

Loading.HTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;