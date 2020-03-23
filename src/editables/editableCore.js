import Editable from  "./editable.js";
import TitleEditable from "./titleEditable.js";
import TextEditable from "./textEditable.js";

/**
 * Manager editables
 */
let editableCores = {
    types: {
        "title": TitleEditable,
        "text": TextEditable,
        "default": Editable
    },

    /**
     * Find Editable type from name
     * @param {String} typeName 
     * @returns Editable Type
     */
    findByType: function(typeName) {
        if (typeName in this.types) {
            return this.types[typeName];
        }

        return this.types["default"];
    },

    /**
     * Create Editable by name type
     * @param {HTMLElement} element
     * @returns Editable instance 
     */
    createEditable: function(element) {
        var typeName = element.getAttribute("data-type");
        var type = this.findByType(typeName);
        return new type(element);
    }
};

export default editableCores;
