import Editable from "./editable.js";

export default class BaseTextEditable extends Editable {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        super(element);
        this.startEditor();
    }

    startEditor() {
        this.element.setAttribute("contentEditable", true);
    }

    removeEditor() {
        this.element.removeAttribute("contentEditable");
    }
}