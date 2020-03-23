import ToolsPanel from "./tools/toolsPanel.js";
import editableCores from "./editables/editableCore.js";

let easySafeEditor = {
    tools: new ToolsPanel(),
    //post: new Post(),
    //actionBar: new ActionBar(),
    //watermark: null,
    editables: [],

    init: function() {
        this.tools.create();
        this.findEditables();
        this.tools.insertEditables(this.editables);
    },

    findEditables: function() {
        var self = this;
        var elements = document.querySelectorAll("[data-edit='true']");
        var length = elements.length;

        for (var i = 0; i < length; i++ ) {
            var element = elements[i];
            var editable = editableCores.createEditable(element);
            self.editables.push(editable);
        }
    }
};

export default easySafeEditor;