import Editable from  "./editable.js";
import TitleEditable from "./titleEditable.js";
import TextEditable from "./textEditable.js";

let editableCores = {
    types: {
        "title": TitleEditable,
        "text": TextEditable,
        "default": Editable
    },

    findByType: function(typeName) {
        if (typeName in this.types) {
            return this.types[typeName];
        }

        return this.types["default"];
    },
    createEditable: function(element) {
        var typeName = element.getAttribute("data-type");
        var type = this.findByType(typeName);
        return new type(element);
    }
};

export default editableCores;
