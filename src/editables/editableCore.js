import Editable from  "./editable.js";
import TextEditable from "./textEditable.js";
import RichTextEditable from "./richTextEditable.js";

import VideoEditable from "./videoEditable.js";
import ImageEditable from "./imageEditable.js";
import ButtonEditable from "./buttonEditable.js";
import TemplateEditable from "./templateEditable.js";


export default class EditableCore {
    constructor() {
    }

    /**
     * Find Editable type from name
     * @param {String} typeName 
     * @returns Editable Type
     */
    static findByType(typeName) {
        if (typeName in EditableCore.types) {
            return EditableCore.types[typeName];
        }
    
        return EditableCore.types["default"];
    }

    /**
     * Create Editable by name type
     * @param {HTMLElement} element
     * @returns Editable instance 
     */
    static createEditable(editor, element) {
        let typeName = element.getAttribute("data-type");
        let type = this.findByType(typeName);
        return new type(editor, element);
    }
}

EditableCore.types = {
    "text": TextEditable,
    "richText": RichTextEditable,
    "video": VideoEditable,
    "image": ImageEditable,
    "button": ButtonEditable,
    "template": TemplateEditable,
    "default": Editable
}