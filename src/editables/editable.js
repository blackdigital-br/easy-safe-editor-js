export default class Editable {
    
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        this.type = element.getAttribute("data-type");
        this.label = element.getAttribute("data-label");
        this.element = element;
    }
}