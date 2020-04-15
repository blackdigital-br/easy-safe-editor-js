export default class Editable {
    
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(editor, element) {
        this.type = element.getAttribute("data-type");
        this.label = element.getAttribute("data-label");
        this.element = element;
        this.editor = editor;

        this.element.addEventListener("focus", event => this.onElementFocus(event), true);
    }

    /**
     * 
     * @param {FocusEvent} event 
     */
    onElementFocus(event) {
        this.editor.selectEditable(this);
    }

    /**
     * 
     * @param {Object} datas 
     */
    getValue(values) {
        let value = this.element.innerHTML;
        value = value.replace(/\s\s+/g, ' ');
        values[this.label] = value;
        return values;
    }
}