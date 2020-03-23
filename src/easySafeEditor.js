import ToolsPanel from "./tools/toolsPanel.js";
import editableCores from "./editables/editableCore.js";

let easySafeEditor = {
    tools: new ToolsPanel(),
    //post: new Post(),
    //actionBar: new ActionBar(),
    //watermark: null,
    editables: [],

    /**
     * Initializes the editor
     */
    init: function() {
        this.tools.create();
        this.findEditables();
        this.tools.insertEditables(this.editables);
    },

    /**
     * Find on page, elements to edit
     */
    findEditables: function() {
        var self = this;
        var elements = document.querySelectorAll("[data-edit='true']");
        var length = elements.length;

        for (var i = 0; i < length; i++ ) {
            var element = elements[i];
            var editable = editableCores.createEditable(element);
            self.editables.push(editable);
        }
    },

    saveValues: function() {
        var values = {};

        for (var index in this.editables) {
            var editable = this.editables[index];
            values = editable.getValue(values);
        }

        console.log(values);
    }
};

export default easySafeEditor;