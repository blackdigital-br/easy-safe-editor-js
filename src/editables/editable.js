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

    /**
     * 
     * @param {Object} datas 
     */
    getValue(values) {
        var value = this.element.innerHTML;
        value = value.replace(/\s\s+/g, ' ');
        values[this.label] = value;
        return values;
    }
}