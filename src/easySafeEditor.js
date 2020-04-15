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
    title: "",
    titleElement: null,

    /**
     * Initializes the editor
     */
    init: function() {
        this.findTitle();
        this.tools.create(this);
        this.frameTools.create();
        this.findEditables();
        this.tools.insertEditables(this.editables);
    },

    findTitle: function() {
        var elements = document.querySelectorAll("[data-title='true']");

        if (elements.length > 0) {
            this.titleElement = elements[0];
            this.title = elements[0].innerText;
        }
        else {
            console.log("No title!");
            this.titleElement = document.createTextNode(this.title);
        }
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
        editable.element.focus();

        if (this.editableSelected != editable) {
            this.editableSelected = editable;
            this.frameTools.showActions(this.editableSelected);
        }
    },

    saveValues: function() {
        var values = {};
        values["title"] = this.title;

        for (var index in this.editables) {
            var editable = this.editables[index];
            values = editable.getValue(values);
        }

        console.log(values);
    }
};

export default easySafeEditor;