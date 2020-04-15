import Editable from  "./editable.js";
import TextEditable from "./textEditable.js";
import RichTextEditable from "./richTextEditable.js";

import VideoEditable from "./videoEditable.js";
import ImageEditable from "./imageEditable.js";
import ButtonEditable from "./buttonEditable.js";
import TemplateEditable from "./templateEditable.js";

/**
 * Manager editables
 */
let editableCores = {
    types: {
        "text": TextEditable,
        "richText": RichTextEditable,
        "video": VideoEditable,
        "image": ImageEditable,
        "button": ButtonEditable,
        "template": TemplateEditable,
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
    createEditable: function(editor, element) {
        var typeName = element.getAttribute("data-type");
        var type = this.findByType(typeName);
        return new type(editor, element);
    }
};

export default editableCores;
