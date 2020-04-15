import ToolsPanel from "./tools/toolsPanel.js";
import FrameTools from "./tools/frameTools.js"
import editableCores from "./editables/editableCore.js";
import Editable from "./editables/editable.js";

let easySafeEditor = {
    tools: new ToolsPanel(),
    frameTools: new FrameTools(),
    //post: new Post(),
    //actionBar: new ActionBar(),
    //watermark: null,
    editables: [],
    editableSelected: null,

    /**
     * Initializes the editor
     */
    init: function() {
        this.tools.create();
        this.frameTools.create();
        this.findEditables();
        this.tools.insertEditables(this.editables);
    },

    /**
     * Find on page, elements to edit
     */
    findEditables: function() {
        var elements = document.querySelectorAll("[data-edit='true']");
        var length = elements.length;

        for (var i = 0; i < length; i++ ) {
            var element = elements[i];
            var editable = editableCores.createEditable(this, element);
            this.editables.push(editable);
        }
    },

    /**
     * 
     * @param {Editable} editable 
     */
    selectEditable: function(editable) {
        if (this.editableSelected != editable) {
            this.editableSelected = editable;
            this.frameTools.showActions(this.editableSelected);
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